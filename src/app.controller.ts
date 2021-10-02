import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  root(){}

  @Get('/cart')
  @Render('cart')
  hello(){
  }

  @Get('/login')
  @Render('auth/login')
  login(){
  }
  @Get('/register')
  @Render('auth/register')
  register(){
  }
}
