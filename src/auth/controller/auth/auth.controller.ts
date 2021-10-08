import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AuthController {
    @Get('/login')
    @Render('auth/login')
    login(){
    }
    @Get('/register')
    @Render('auth/register')
    register(){
    }
}
