export const validar = (user, name, value) => {
  let mensaje = "";

  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  user.map((users) => {
    if (users.credential.username === value && name === "username") {
      mensaje = "Usuario ya registrado";
    }
    if (users.email === value && name === "email") {
      mensaje = "Email ya registrado";
    }

    if (users.nDni === parseInt(value) && name === "nDni") {
      mensaje = "DNI ya registrado";
    }

    if (name === "password" && !passRegex.test(value)) {
      mensaje =
        "La contraseña debe tener al menos entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. ";
    }

    if (name === "email" && !emailRegex.test(value)) {
      mensaje = "Ingrese un email valido por favor";
    }
  });

  return mensaje;
};
