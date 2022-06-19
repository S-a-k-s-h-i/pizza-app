import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu, MenuDocument } from 'src/schemas/menu.schema';

@Injectable()
export class MenuService {
  constructor(@InjectModel(Menu.name) private menuModel: Model<MenuDocument>) {}

  async allPizzas(): Promise<Menu[]> {
    return await this.menuModel.find();
  }
  async updateCart(request) {
    //first time creating cart
    if (!request.session.cart)
      request.session.cart = {
        items: {},
        totalQuantity: 0,
        totalPrice: 0,
      };

    let cart = request.session.cart;
    //check if item doesn't exist in cart
    if (!cart.items[request.body._id]) {
      cart.items[request.body._id] = {
        item: request.body,
        quantity: 1,
      };
      cart.totalQuantity += 1;
      cart.totalPrice += +request.body.price;
    } else {
      cart.items[request.body._id].quantity += 1;
      cart.totalQuantity += 1;
      cart.totalPrice += +request.body.price;
    }
    return { totalQuantity: request.session.cart.totalQuantity };
  }
}
