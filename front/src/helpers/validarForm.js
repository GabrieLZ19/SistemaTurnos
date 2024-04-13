export const validarFormulario = (form) => {
  const nuevosErrores = {};

  if (!form.name) {
    nuevosErrores.name = "El campo name es requerido.";
  }

  if (!form.email) {
    nuevosErrores.email = "El campo email es requerido.";
  }

  if (!form.birthdate) {
    nuevosErrores.birthdate = "El campo birthdate es requerido.";
  }

  if (!form.nDni) {
    nuevosErrores.nDni = "El campo DNI es requerido.";
  }

  if (!form.username) {
    nuevosErrores.username = "El campo username es requerido.";
  }

  if (!form.password) {
    nuevosErrores.password = "El campo password es requerido.";
  }

  return nuevosErrores;
};
