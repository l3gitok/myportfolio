import { IsEmail, IsString, Length } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @Length(2, 100)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(10, 1000)
  message: string;
}
