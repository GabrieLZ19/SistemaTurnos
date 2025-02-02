import { Credential } from "../entities/Credential";

export interface IUserDto {
  name: string;
  email: string;
  birthdate: Date;
  nDni: number;
  username: string;
  password: string;
}
