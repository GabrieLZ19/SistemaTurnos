export const validarLogin = (usuariosBD, user) => {
  let validar = false;
  usuariosBD.map((users) => {
    if (
      users.credential.username === user.username &&
      users.credential.password === user.password
    ) {
      validar = true;
    }
  });

  return validar;
};
