import { IsEmail, isNotEmpty, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  first_name: string;
  @IsNotEmpty()
  last_name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
