import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as session from 'express-session';
import { addSession } from './general/middlewares/session.middleware';
const expressLayout = require('express-layout');
const flash = require('express-flash');
const mongoStore = require('connect-mongo');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //to allow cross origin requests
  app.enableCors();

  // app.use(csurf());

  //protect app from web vulnerabilities by setting http headers
  app.use(helmet());

  //Session Config
  app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: false,
      store: mongoStore.create({
        mongoUrl: process.env.MONGO_CONNECTION_URL,
        collection: 'sessions',
      }),
      saveUninitialized: false,
      cookie: { maxAge: 1000 * 60 * 60 * 24 }, //24 hours
    }),
  );
  app.use(flash());

  //set static assets to public folder
  app.useStaticAssets(join(__dirname, '..', 'public'));
  //set views dir to views in resources folder
  app.setBaseViewsDir(join(__dirname, '..', 'resources/views'));
  //set Template engine
  app.set('view engine', 'ejs');
  app.use(expressLayout());

  app.use(addSession);

  await app.listen(3000);
}
bootstrap();
