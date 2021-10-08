import { Controller, Get, Render } from '@nestjs/common';

@Controller('order')
export class OrderController {
    @Get('/cart')
    @Render('cart')
    hello(){
    }
}
