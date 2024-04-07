import { DataSource } from "typeorm";
import "dotenv/config";

import { User } from "../entities/User";
import { Credential } from "../entities/Credencial";
import { Turno } from "../entities/Turno";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: process.env.PASSWORD,
  database: "proyectoorm",
  // dropSchema: true,
  synchronize: true,
  logging: false,
  entities: [User, Credential, Turno],
  subscribers: [],
  migrations: [],
});

export const userModel = AppDataSource.getRepository(User);

export const credentialModel = AppDataSource.getRepository(Credential);

export const turnModel = AppDataSource.getRepository(Turno);
