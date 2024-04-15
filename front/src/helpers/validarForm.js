export const validarFormulario = (form) => {
  const nuevosErrores = {};

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

  if (!form.password) {
    nuevosErrores.password = "El campo contraseña es requerido.";
  }

  return nuevosErrores;
};
