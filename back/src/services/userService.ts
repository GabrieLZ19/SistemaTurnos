import { IUserDto } from "../dtos/IUserDto";
import { IUser } from "../interfaces/IUser";
import { crearCredencial } from "./credentialService";

const users: IUser[] = [];
let userID: number = 1;

export const obtenerUsuariosService = async (): Promise<IUser[]> => {
  const usuarios: IUser[] = users;

  if (!usuarios) {
    throw Error(" Error de la base de datos al buscar usuarios");
  } else {
    return usuarios;
  }
};

export const obtenerUsuarioIDService = async (id: number): Promise<IUser> => {
  const usuarioEncontrado: IUser | undefined = users.find(
    (user) => user.id === id
  );

  if (!usuarioEncontrado)
    throw Error("No se encontro ningun usuario con ese ID");

  return usuarioEncontrado;
};

export const crearUsuarioService = async (params: IUserDto): Promise<IUser> => {
  const nuevaCredential: number = await crearCredencial({
    username: params.username,
    password: params.password,
  });

  const usuarioNuevo: IUser = {
    id: userID++,
    name: params.name,
    email: params.email,
    birthdate: params.birthdate,
    nDni: params.nDni,
    credentialId: nuevaCredential,
  };

  users.push(usuarioNuevo);

  return usuarioNuevo;
};

// export const crearUsuarioService = async (
//   usuario: Omit<IUser, "id">
// ): Promise<IUser> => {
//   const id: number = userID++;

//   const user: IUser = {
//     id,
//     name: usuario.name,
//     email: usuario.email,
//     birthdate: usuario.birthdate,
//     nDni: usuario.nDni,
//     credentialId: usuario.credentialId,
//   };

//   users.push(user);

//   return user;
// };
