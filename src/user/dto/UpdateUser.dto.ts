import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { UniqueEmail } from '../validate/unique-email.validator';

export class UpdateUserDTO {
  @IsNotEmpty({ message: 'name cannot be empty' })
  @IsOptional()
  name: string;

  @IsEmail(undefined, { message: 'invalid email' })
  @UniqueEmail({ message: 'email already exists' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'the password must be 6 characters' })
  @IsOptional()
  password: string;
}
