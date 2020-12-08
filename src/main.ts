import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('TThư viện App Design API')
    .setDescription('Design API Thư viện Hội Sinh viên UET WebSite')
    .setVersion('1.0')
    .setContact('Nguyễn Thái Tiệp', '', 'nguyenthaitiep206@gmail.com')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
