import { Prop, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document

export class User{
    @Prop({required:true,unique:true})
    email:string;

    @Prop({required:true})
    username:string;
    
    @Prop({required:true})
    password:string;

    @Prop({required:true})
    address:string;
    
    @Prop({default:'customer'})
    role:string;
}

export const UserSchema = SchemaFactory.createForClass(User).set('timestamps',true);