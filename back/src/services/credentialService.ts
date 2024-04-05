import { ICredentialDto } from "../dtos/ICredentialDto";
import { ICredential } from "../interfaces/ICredential";

const credenciales: ICredential[] = [];
let credentialId: number = 1;

export const crearCredencial = async (
  credentialDto: ICredentialDto
): Promise<number> => {
  const nuevaCredential: ICredential = {
    id: credentialId++,
    username: credentialDto.username,
    password: credentialDto.password,
  };

  credenciales.push(nuevaCredential);

  return nuevaCredential.id;
};

export const buscarCredencial = async (
  credencialDto: ICredentialDto
): Promise<number> => {
  const { username, password } = credencialDto;

  const encontrarCredential = credenciales.find(
    (credential) =>
      credential.username === username && credential.password === password
  );

  if (
    encontrarCredential &&
    encontrarCredential.username === username &&
    encontrarCredential.password === password
  ) {
    return encontrarCredential.id;
  } else {
    throw Error("Credenciales incorrectas");
  }

  // credenciales.filter((elemento) => {
  //   if (elemento.username === username) {
  //     if (elemento.password === password) {
  //       return elemento.id;
  //     }
  //   }
  // });
};

// export const crearCredencial = (
//   username: string,
//   password: string
// ): ICredential => {
//   const id: number = credentialId++;

//   const credencial: ICredential = {
//     id,
//     username,
//     password,
//   };

//   credenciales.push(credencial);

//   return credencial;
// };
