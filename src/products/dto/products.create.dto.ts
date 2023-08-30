import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: number;

  @IsOptional()
  image: string;

  @IsOptional()
  description: string | null;

  @IsNotEmpty()
  categories: string[];
}
