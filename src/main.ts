import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
const expressLayout = require('express-layout');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //to allow cross origin requests
  app.enableCors();
  
  // app.use(csurf());
  
  //protect app from web vulnerabilities by setting http headers
  app.use(helmet());
  
  
  //set static assets to public folder
  app.useStaticAssets(join(__dirname, '..', 'public'));
  //set views dir to views in resources folder
  app.setBaseViewsDir(join(__dirname, '..', 'resources/views'));
  //set Template engine
  app.set('view engine', 'ejs');
  app.use(expressLayout())

  await app.listen(3000);
}
bootstrap();

