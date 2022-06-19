import { Controller, Get, Post, Render, Req, Res } from '@nestjs/common';
import { request } from 'http';
import { MenuService } from 'src/menu/service/menu/menu.service';
@Controller()
export class MenuController {
  constructor(private menuService: MenuService) {}

  @Get()
  async root(@Res() res) {
    const pizzas = await this.menuService.allPizzas();
    return res.render('home', { pizzas: pizzas });
  }

  @Get('/cart')
  @Render('cart')
  index() {}

  @Post('/update-cart')
  async updateCart(@Req() request) {
    return await this.menuService.updateCart(request);
  }
}
