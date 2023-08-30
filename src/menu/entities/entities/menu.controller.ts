import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from 'src/menu/dto/menu.create';
import { UpdateMenuDto } from 'src/menu/dto/menu.update.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  async findAll() {
    const currentTime = new Date().getHours();
    let turn = '';

    if (currentTime >= 18 || currentTime < 6) {
      // Retornar cardápio noturno após as 18h até 6h
      turn = 'noturno';
    } else {
      // Retornar cardápio diurno durante o dia
      turn = 'diurno';
    }
    return await this.menuService.findAll(turn);
  }

  @Post('create')
  async create(@Body() createMenuDtop: CreateMenuDto) {
    return await this.menuService.create(createMenuDtop);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(id, updateMenuDto);
  }

  @HttpCode(204)
  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    return this.menuService.remove(id);
  }
}
