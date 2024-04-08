import { DataSource } from "typeorm";
import "dotenv/config";

import { User } from "../entities/User";
import { Credential } from "../entities/Credencial";
import { Appointment } from "../entities/Turno";
import { DB_HOST, DB_PASSWORD, DB_PORT, DB_TYPE, DB_USER } from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: 5432,
  username: DB_USER,
  password: DB_PASSWORD,
  database: "sistematurnos",
  // dropSchema: true,
  synchronize: true,
  logging: false,
  entities: [User, Credential, Appointment],
  subscribers: [],
  migrations: [],
});

export const userModel = AppDataSource.getRepository(User);

export const credentialModel = AppDataSource.getRepository(Credential);

export const turnModel = AppDataSource.getRepository(Appointment);
