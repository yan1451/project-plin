import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateMenuDto {
  @IsString()
  @MaxLength(255)
  @IsOptional()
  name: string;

  @IsOptional()
  turn: string;
}
