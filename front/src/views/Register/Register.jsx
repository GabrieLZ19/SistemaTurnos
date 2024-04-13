import axios from "axios";
import { useEffect, useState } from "react";
import { validar } from "../../helpers/validar";
import { validarFormulario } from "../../helpers/validarForm";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
  });

  const [checkForm, setChekForm] = useState({});

  const [errors, setErrors] = useState({ username: "", email: "", nDni: "" });

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => setUser(res.data));
  }, []);

  console.log(form);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });

    setChekForm(validarFormulario(form));

    const mensajeError = validar(user, name, value);
    setErrors({
      ...errors,
      [name]: mensajeError,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const errores = validarFormulario(form);
    if (Object.keys(errores).length === 0) {
      // Todos los campos están completados, puedes enviar el formulario.
      axios.post("http://localhost:3000/users/register", form);
      alert("Formulario válido");
    } else {
      // Hay errores en el formulario, muestra los mensajes de error.
      setChekForm(errores);
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h2>Registro </h2>
      <div>
        <label>Name; </label>
        <input
          type="text"
          value={form.name}
          name="name"
          onChange={handleInputChange}
        />
      </div>
      {checkForm.name && <p>{checkForm.name}</p>}
      <div>
        <label> Email:</label>
        <input
          type="email"
          value={form.email}
          name="email"
          onChange={handleInputChange}
        />
      </div>

      {errors.email && <p>{errors.email}</p>}
      {checkForm.email && <p>{checkForm.email}</p>}

      <div>
        <label> Birthdate:</label>
        <input
          type="date"
          value={form.birthdate}
          name="birthdate"
          onChange={handleInputChange}
        />
      </div>
      {checkForm.birthdate && <p>{checkForm.birthdate}</p>}
      <div>
        <label>Numero DNI: </label>
        <input
          type="number"
          value={form.nDni}
          name="nDni"
          onChange={handleInputChange}
        />
      </div>
      {errors.nDni && <p>{errors.nDni}</p>}
      {checkForm.nDni && <p>{checkForm.nDni}</p>}
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={form.username}
          name="username"
          onChange={handleInputChange}
        />
      </div>
      {errors.username && <p>{errors.username}</p>}
      {checkForm.username && <p>{checkForm.username}</p>}
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={form.password}
          name="password"
          onChange={handleInputChange}
        />
      </div>
      {checkForm.password && <p>{checkForm.password}</p>}

      <button type="submit"> Registrarse!</button>
    </form>
  );
};

export default Register;
