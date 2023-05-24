import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigureEnum } from './common/enums/configure.enum';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { SystemExceptionFilter } from './common/filters/system-exception.filter';
import { FieldExceptionFilter } from './common/filters/field-exception.filter';
import { AuthMiddleware } from './common/middleware/auth.middleware';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

const ENV = process.env['NODE_ENV'];
const envFilePath = [`env/${!ENV ? `.env` : `.env.${ENV}`}`];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get(ConfigureEnum.DATABASE_HOST),
        port: +configService.get(ConfigureEnum.DATABASE_PORT),
        username: configService.get(ConfigureEnum.DATABASE_USER),
        password: configService.get(ConfigureEnum.DATABASE_PASSWORD),
        database: configService.get(ConfigureEnum.DATABASE_DB),
        entities: [__dirname + '/**/common/entities/*.entity{.ts,.js}'],
        synchronize: configService.get(ConfigureEnum.DATABASE_SYNCRONIZE),
        logging: !!configService.get(ConfigureEnum.DATABASE_LOGGING),
        logger: 'file',
      }),
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: SystemExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: FieldExceptionFilter,
    },
  ],
})
export class AppModule {
  constructor() {
    console.log(__dirname);
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
    consumer
      .apply(AuthMiddleware)
      // .exclude(...publicUrls)
      .forRoutes('*');
  }
}
