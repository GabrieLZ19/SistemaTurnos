import {
  AppDataSource,
  credentialModel,
  userModel,
} from "../config/data-source";
import { ICredentialDto } from "../dtos/ICredentialDto";
import { Credential } from "../entities/Credencial";

export const crearCredencial = async (
  credencials: ICredentialDto
): Promise<Credential> => {
  const newCredencial: Credential = new Credential();

  (newCredencial.username = credencials.username),
    (newCredencial.password = credencials.password);

  credentialModel.save(newCredencial);

  return newCredencial;
};

export const buscarCredencial = async (
  credencialDto: ICredentialDto
): Promise<number> => {
  const { username, password } = credencialDto;

  const encontrarCredential = await credentialModel.findOneBy({
    username: username,
    password: password,
  });

  if (!encontrarCredential) {
    throw Error(" Credenciales incorrectas");
  } else {
    return encontrarCredential.id;
  }
};
