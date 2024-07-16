import { IsEmail, IsString, Length } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(11, 11)
  cpf: string;
}