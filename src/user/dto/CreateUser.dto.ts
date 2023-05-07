import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'name cannot be empty' })
  name: string;

  @IsEmail(undefined, { message: 'invalid email' })
  email: string;

  @MinLength(6, { message: 'the password must be 6 characters' })
  password: string;
}
