import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel:Model<UserDocument>){}
    
    /**
     * Method to create new user
     * @param createUserDto contains data to create user
     * @returns User
     */
    async createUser(createUserDto:CreateUserDto):Promise<User>{
        const user = new this.userModel(createUserDto);
        return user.save();
       
    }
}
