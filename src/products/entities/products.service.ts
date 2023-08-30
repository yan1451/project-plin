import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateProductDto } from '../dto/products.create.dto';
import { Product } from '@prisma/client';
import { UpdateProductDto } from '../dto/update.products.dto';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  async findAll(): Promise<Product[]> {
    const products = await this.prismaService.product.findMany();

    products.map((e) => delete e.categoryId);

    return products;
  }

  async findByName(name: string): Promise<Product> {
    const product = await this.prismaService.product.findUnique({
      where: { name },
      include: {
        categories: true,
      },
    });

    if (product === null) throw new Error();

    if (!product) throw new Error('Produto não encontrado!');

    delete product.categoryId;
    product.categories.map((element) => {
      delete element.productId;
    });
    return product;
  }

  async findById(id: string): Promise<Product> {
    const product = await this.prismaService.product.findUnique({
      where: { id },
    });

    if (product === null) throw new Error();

    if (!product) throw new Error('Produto não encontrado!');

    return product;
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const { categories, ...infos } = createProductDto;

    const existingCategories = [];

    for (const categoryName of categories) {
      const existingCategory = await this.prismaService.category.findUnique({
        where: { name: categoryName },
      });

      if (existingCategory) {
        existingCategories.push(existingCategory);
      } else {
        throw new Error(
          'Categoria não existente, crie uma categoria para continuar! ',
        );
      }
    }

    const createProduct = await this.prismaService.product.create({
      data: {
        ...infos,
        categories: {
          connect: existingCategories.map((category) => ({
            id: category.id,
          })),
        },
      },
      include: {
        categories: true,
      },
    });

    return createProduct;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return this.prismaService.product.update({
      where: { id },
      data: {
        ...updateProductDto,
      },
    });
  }

  async remove(id: string) {
    return this.prismaService.product.delete({
      where: { id },
    });
  }
}
