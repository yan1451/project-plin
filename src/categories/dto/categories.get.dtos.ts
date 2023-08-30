import { Product } from '@prisma/client';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class GetCategoryDto {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  menuId: string;

  products: Product[];
}
