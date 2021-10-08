import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu, MenuDocument } from 'src/schemas/menu.schema';

@Injectable()
export class MenuService {
    constructor(@InjectModel(Menu.name) private menuModel:Model<MenuDocument>){}

    async allPizzas(){
        return await this.menuModel.find();   
    }
}
