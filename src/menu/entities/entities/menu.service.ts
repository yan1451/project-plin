import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateMenuDto } from 'src/menu/dto/menu.create';
import { UpdateMenuDto } from 'src/menu/dto/menu.update.dto';

@Injectable()
export class MenuService {
  constructor(private prismaService: PrismaService) {}

  async findAll(turn: string) {
    const menu = await this.prismaService.menu.findMany({
      where: { turn },
      include: {
        categories: {
          include: { products: true },
        },
      },
    });

    menu.map((e) =>
      e.categories.map((el) => {
        delete el.productId,
          delete el.menuId,
          el.products.map((p) => {
            delete p.categoryId;
          });
      }),
    );

    return menu;
  }

  async create(createMenuDto: CreateMenuDto) {
    try {
      let { name, turn } = createMenuDto;
      name = name.toLowerCase();
      turn = turn.toLowerCase();

      const menu = await this.prismaService.menu.findFirst({ where: { name } });
      if (menu) throw new Error('menu existente');
      await this.prismaService.menu.create({ data: { name, turn } });
    } catch (error) {
      return error.message;
    }
  }

  async update(id: string, updateMenuDto: UpdateMenuDto) {
    return this.prismaService.menu.update({
      where: { id },
      data: updateMenuDto,
    });
  }

  async remove(id: string) {
    return this.prismaService.menu.delete({
      where: { id },
    });
  }
}
