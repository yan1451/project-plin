import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @MaxLength(255)
  @IsOptional()
  name: string;

  @IsOptional()
  price: number;

  @IsOptional()
  image: string;

  @IsOptional()
  description: string | null;
}
