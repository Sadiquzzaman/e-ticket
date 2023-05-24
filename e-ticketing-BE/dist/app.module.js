"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const configure_enum_1 = require("./common/enums/configure.enum");
const core_1 = require("@nestjs/core");
const logging_interceptor_1 = require("./common/interceptors/logging.interceptor");
const system_exception_filter_1 = require("./common/filters/system-exception.filter");
const field_exception_filter_1 = require("./common/filters/field-exception.filter");
const auth_middleware_1 = require("./common/middleware/auth.middleware");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const ENV = process.env['NODE_ENV'];
const envFilePath = [`env/${!ENV ? `.env` : `.env.${ENV}`}`];
let AppModule = class AppModule {
    constructor() {
        console.log(__dirname);
    }
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes('*');
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.get(configure_enum_1.ConfigureEnum.DATABASE_HOST),
                    port: +configService.get(configure_enum_1.ConfigureEnum.DATABASE_PORT),
                    username: configService.get(configure_enum_1.ConfigureEnum.DATABASE_USER),
                    password: configService.get(configure_enum_1.ConfigureEnum.DATABASE_PASSWORD),
                    database: configService.get(configure_enum_1.ConfigureEnum.DATABASE_DB),
                    entities: [__dirname + '/**/common/entities/*.entity{.ts,.js}'],
                    synchronize: configService.get(configure_enum_1.ConfigureEnum.DATABASE_SYNCRONIZE),
                    logging: !!configService.get(configure_enum_1.ConfigureEnum.DATABASE_LOGGING),
                    logger: 'file',
                }),
                inject: [config_1.ConfigService],
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
        ],
        providers: [
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: logging_interceptor_1.LoggingInterceptor,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: system_exception_filter_1.SystemExceptionFilter,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: field_exception_filter_1.FieldExceptionFilter,
            },
        ],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map