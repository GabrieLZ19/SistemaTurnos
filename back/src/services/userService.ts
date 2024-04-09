import UserRepository from "../repositories/UserRepository";
import { ICredentialDto } from "../dtos/ICredentialDto";
import { IUserDto } from "../dtos/IUserDto";
import { Credential } from "../entities/Credencial";
import { User } from "../entities/User";
import { buscarCredencial, crearCredencial } from "./credentialService";

export const obtenerUsuariosService = async (): Promise<User[]> => {
  const usuarios: User[] = await UserRepository.find({
    relations: { turno: true },
  });

  if (!usuarios) {
    throw Error(" Error de la base de datos al buscar usuarios");
  } else {
    return usuarios;
  }
};

export const obtenerUsuarioIDService = async (id: number): Promise<User> => {
  const usuario: User | null = await UserRepository.findOne({
    relations: { turno: true },
    where: { id: id },
  });

  if (!usuario) throw Error("No se encontro ningun usuario con ese ID");

  return usuario;
};

export const crearUsuarioService = async (params: IUserDto): Promise<User> => {
  const newCredencial: Credential = await crearCredencial({
    username: params.username,
    password: params.password,
  });

  const newUser: User = new User();

  (newUser.name = params.name),
    (newUser.email = params.email),
    (newUser.birthdate = params.birthdate),
    (newUser.nDni = params.nDni),
    (newUser.credential = newCredencial);

  const bdUser = await UserRepository.create(newUser);
  await UserRepository.save(bdUser);

  return bdUser;
};

export const loginUsuarioService = async (
  params: ICredentialDto
): Promise<User> => {
  const validar = await buscarCredencial(params);

  if (!validar) {
    throw Error("Credenciales invalidas");
  }

  const usuario: User | null = await UserRepository.findOneBy({ id: validar });

  if (!usuario) throw Error("No se encontro ningun usuario");

  return usuario;
};
