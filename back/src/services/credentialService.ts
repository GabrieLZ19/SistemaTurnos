import { credentialModel, userModel } from "../config/data-source";
import { ICredentialDto } from "../dtos/ICredentialDto";
import { Credential } from "../entities/Credencial";

export const crearCredencial = async (
  credential: ICredentialDto
): Promise<Credential> => {
  const credencial: Credential = await credentialModel.create(credential);

  await credentialModel.save(credencial);

  return credencial;
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
