export const validar = (user, name, value) => {
  let mensaje = "";
  user.map((users) => {
    if (users.credential.username === value && name === "username") {
      mensaje = "Usuario registrado";
    }
    if (users.email === value && name === "email") {
      mensaje = "Email ya registrado";
    }

    if (users.nDni === parseInt(value) && name === "nDni") {
      mensaje = "DNI registrado";
    }
  });

  return mensaje;
};
