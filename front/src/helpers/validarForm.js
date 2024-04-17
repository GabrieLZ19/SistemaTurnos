export const validarFormulario = (form) => {
  const nuevosErrores = {};
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (!form.name) {
    nuevosErrores.name = "El campo nombre es requerido.";
  }

  if (!form.email) {
    nuevosErrores.email = "El campo email es requerido.";
  }

  if (!form.birthdate) {
    nuevosErrores.birthdate = "El campo Fecha de nacimiento es requerido.";
  }

  if (!form.nDni) {
    nuevosErrores.nDni = "El campo DNI es requerido.";
  }

  if (!form.username) {
    nuevosErrores.username = "El campo usuario es requerido.";
  }

  if (!passRegex.test(form.password)) {
    nuevosErrores.password = "Contraseña invalida ";
  }
  if (!form.password) {
    nuevosErrores.password = "El campo contraseña es requerido.";
  }

  return nuevosErrores;
};
