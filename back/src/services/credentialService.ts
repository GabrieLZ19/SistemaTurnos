import { ICredential } from "../interfaces/ICredential";

const credenciales: ICredential[] = [];
let id: number = 0;

export const crearCredencial = (
  username: string,
  password: string
): ICredential => {
  id++;
  const credencial: ICredential = {
    id,
    username,
    password,
  };

  credenciales.push(credencial);

  return credencial;
};

export const buscarCredencial = (username: string, password: string) => {
  credenciales.filter((elemento) => {
    if (elemento.username === username) {
      if (elemento.password === password) {
        return elemento.id;
      }
    }
  });
};
