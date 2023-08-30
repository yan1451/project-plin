import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateMenuDto {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  turn: string;
}
