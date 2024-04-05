import { IUser } from "../interfaces/IUser";

const users: IUser[] = [];
let userID: number = 1;

export const obtenerUsuariosService = async (): Promise<IUser[]> => {
  return users;
};

export const obtenerUsuarioIDService = async (
  id: number
): Promise<IUser | undefined> => {
  return users.find((elemento) => elemento.id === id);
};

export const crearUsuarioService = async (
  usuario: Omit<IUser, "id">
): Promise<IUser> => {
  const id: number = userID++;

  const user: IUser = {
    id,
    name: usuario.name,
    email: usuario.email,
    birthdate: usuario.birthdate,
    nDni: usuario.nDni,
    credentialId: usuario.credentialId,
  };

  users.push(user);

  return user;
};
