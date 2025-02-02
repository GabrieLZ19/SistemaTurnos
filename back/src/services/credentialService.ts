import CredentialRepository from "../repositories/CredentialRepository";
import { ICredentialDto } from "../dtos/ICredentialDto";
import { Credential } from "../entities/Credential";

export const crearCredencial = async (
  credencials: ICredentialDto
): Promise<Credential> => {
  const newCredencial: Credential = new Credential();

  (newCredencial.username = credencials.username),
    (newCredencial.password = credencials.password);

  const bdCredencial = await CredentialRepository.create(newCredencial);
  await CredentialRepository.save(bdCredencial);

  return bdCredencial;
};

export const buscarCredencial = async (
  credencialDto: ICredentialDto
): Promise<number> => {
  const { username, password } = credencialDto;

  const encontrarCredential = await CredentialRepository.findOneBy({
    username: username,
    password: password,
  });

  if (!encontrarCredential) {
    throw Error(" Credenciales incorrectas");
  } else {
    return encontrarCredential.id;
  }
};
