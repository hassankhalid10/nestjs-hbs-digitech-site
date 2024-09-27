import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import hbs = require('hbs');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);   //create nestjs app

  app.useStaticAssets(join(__dirname, '..', 'public'));                       //public directory will be used for storing static assets
  app.setBaseViewsDir(join(__dirname, '..', 'views'));                        //link view folder and  it will contain templates
  app.setViewEngine('hbs');                                                   //set hbs engines

  hbs.registerPartials(join(__dirname, '..', 'views', 'partials'));         //registerPartials

  await app.listen(5000);                                                 //run app on 5000 port
}

bootstrap();
                                                                       
