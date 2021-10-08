import { Controller, Get, Res } from '@nestjs/common';
import { MenuService } from 'src/menu/service/menu/menu.service';

@Controller()
export class MenuController {
    constructor(private menuService:MenuService){}

    @Get()
    async root(@Res() res){
        const pizzas = await this.menuService.allPizzas();
        console.log(pizzas)
        return res.render('home',{pizzas:pizzas});
    }
  
}
