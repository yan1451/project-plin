import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Param,
  NotFoundException,
  BadRequestException,
  Delete,
  HttpCode,
  Patch,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from '../dto/products.create.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { UpdateProductDto } from '../dto/update.products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll() {
    return await this.productsService.findAll();
  }

  @Get('findByName')
  async findByName(@Query('name') name: string) {
    if (!name) throw new BadRequestException('Name é obrigatorio!');
    const product = await this.productsService.findByName(name);
    if (!product) throw new NotFoundException('Produto Não encontrado!');
    return product;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      if (id !== 'ObjectId')
        throw new PrismaClientKnownRequestError('Id mal formatado', {
          code: 'P1012',
          clientVersion: '5.2.0',
        });

      const product = await this.productsService.findById(id);
      if (!product) throw new NotFoundException('Produto Não encontrado!');

      return product;
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }

  @Post('create')
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      return await this.productsService.create(createProductDto);
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @HttpCode(204)
  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
