import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCategoryDto } from '../dto/categories.create';
import { Category } from '@prisma/client';
import { GetCategoryDto } from '../dto/categories.get.dtos';
import { UpdateCategoryDto } from '../dto/categories.update.dto';

@Injectable()
export class CategoriesService {
  constructor(private prismaService: PrismaService) {}

  async findAll(): Promise<Category[]> {
    return await this.prismaService.category.findMany();
  }

  async findByName(categoryName: string) {
    const category = await this.prismaService.category.findMany({
      where: { name: categoryName },
      include: {
        products: true,
      },
    });

    this.deleteCategoryIdFromProducts(category);

    if (!category || category.length < 1) return null;

    return category;
  }

  private async deleteCategoryIdFromProducts(category: GetCategoryDto[]) {
    for (const element of category) {
      for (const product of element.products) {
        delete product.categoryId;
      }
    }
  }

  async create(createCategoryDto: CreateCategoryDto) {
    const { menuId, ...categoryBody } = createCategoryDto;
    return this.prismaService.category.create({
      data: {
        ...categoryBody,
        Menu: {
          connect: { id: menuId },
        },
      },
    });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.prismaService.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  async remove(id: string) {
    return this.prismaService.category.delete({
      where: { id },
    });
  }
}
