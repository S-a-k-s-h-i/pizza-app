import { Controller, Get, Res } from '@nestjs/common';
import { MenuService } from 'src/menu/service/menu/menu.service';

@Controller()
export class MenuController {
    constructor(private menuService:MenuService){}

    @Get()
    async root(@Res() res){
        const pizzas = await this.menuService.allPizzas();
        return res.render('home',{pizzas:pizzas});
    }
  
}
