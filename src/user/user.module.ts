import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';
import { UserController } from './controller/user/user.controller';
import { UserService } from './service/user/user.service';

@Module({
  imports:[MongooseModule.forFeature([{name:User.name,schema:UserSchema}])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
