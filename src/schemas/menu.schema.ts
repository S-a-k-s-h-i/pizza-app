import { Prop, SchemaFactory } from "@nestjs/mongoose";

export type MenuDocument = Menu & Document

export class Menu{
    @Prop({required:true})
    name:string;

    @Prop({required:true})
    image:string;
    
    @Prop({required:true})
    price:number;

    @Prop({required:true})
    size:string;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);