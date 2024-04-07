import { Credential } from "../entities/Credencial";

export interface IUserDto {
  name: string;
  email: string;
  birthdate: Date;
  nDni: number;
  credential: Credential;
}
