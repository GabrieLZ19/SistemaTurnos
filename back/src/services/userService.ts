import { userModel } from "../config/data-source";
import { IUserDto } from "../dtos/IUserDto";
import { Credential } from "../entities/Credencial";
import { User } from "../entities/User";
import { crearCredencial } from "./credentialService";

export const obtenerUsuariosService = async (): Promise<User[]> => {
  const usuarios: User[] = await userModel.find({
    relations: { credential: true },
  });

  if (!usuarios) {
    throw Error(" Error de la base de datos al buscar usuarios");
  } else {
    return usuarios;
  }
};

export const obtenerUsuarioIDService = async (id: number): Promise<User> => {
  const usuario = await userModel.findOneBy({ id: id });

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

  userModel.save(newUser);

  return newUser;
};
