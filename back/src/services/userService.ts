import { credentialModel, userModel } from "../config/data-source";
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

export const crearUsuarioService = async (usuario: IUserDto): Promise<User> => {
  const newUsuario = await userModel.create(usuario);

  await userModel.save(usuario);

  return newUsuario;
};
