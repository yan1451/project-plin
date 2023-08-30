import {
  Controller,
  Get,
  Query,
  Body,
  Post,
  NotFoundException,
  BadRequestException,
  Delete,
  Param,
  HttpCode,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from '../dto/categories.create';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get('')
  async findAll() {
    return await this.categoriesService.findAll();
  }

  @Get('findByName')
  async findByName(@Query('name') name: string) {
    if (!name) throw new BadRequestException('Name is required!');

    const category = await this.categoriesService.findByName(name);

    if (!category) throw new NotFoundException('Categoria Não Encontrada!');

    return category;
  }

  @Post('/create')
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoriesService.create(createCategoryDto);
  }

  @HttpCode(204)
  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    return this.categoriesService.remove(id);
  }
}
