import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
  });

  console.log(form);
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/users/register", form);
    alert("Te registraste");
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
      <div>
        <label> Email:</label>
        <input
          type="email"
          value={form.email}
          name="email"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label> Birthdate:</label>
        <input
          type="date"
          value={form.birthdate}
          name="birthdate"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Numero DNI: </label>
        <input
          type="number"
          value={form.nDni}
          name="nDni"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={form.username}
          name="username"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={form.password}
          name="password"
          onChange={handleInputChange}
        />
      </div>

      <button type="submit"> Registrarse!</button>
    </form>
  );
};

export default Register;
