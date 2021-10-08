import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Menu, MenuSchema } from 'src/schemas/menu.schema';
import { MenuController } from './controller/menu/menu.controller';
import { MenuService } from './service/menu/menu.service';

@Module({
  imports:[MongooseModule.forFeature([{name:Menu.name,schema:MenuSchema}])],
  controllers: [MenuController],
  providers: [MenuService]
})
export class MenuModule {}
