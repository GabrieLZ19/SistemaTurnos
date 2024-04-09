import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credencial";

const CredentialRepository = AppDataSource.getRepository(Credential);

export default CredentialRepository;
