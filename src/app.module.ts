import { Module } from '@nestjs/common';
import { ProductsController } from './products/entities/products.controller';
import { ProductsService } from './products/entities/products.service';
import { PrismaService } from './database/prisma.service';
import { CategoriesController } from './categories/entities/categories.controller';
import { CategoriesService } from './categories/entities/categories.service';
import { MenuController } from './menu/entities/entities/menu.controller';
import { MenuService } from './menu/entities/entities/menu.service';

@Module({
  imports: [],
  controllers: [ProductsController, CategoriesController, MenuController],
  providers: [ProductsService, PrismaService, CategoriesService, MenuService],
})
export class AppModule {}
