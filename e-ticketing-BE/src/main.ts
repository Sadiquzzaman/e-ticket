import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('E-ticketing')
    .setDescription('E-ticketing API DOC')
    .setVersion('1.0')
    .addTag('eticketings')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/doc', app, document, {
    customSiteTitle: 'E-ticketing API DOC',
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
  await app.listen(3000);
  console.log('Server is running on http://localhost:3000/api/doc');
}
bootstrap();
