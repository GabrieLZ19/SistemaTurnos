import { useEffect, useState } from "react";
import { validarLogin } from "../../helpers/validarLogin";
import axios from "axios";
import styles from "./Login.module.css";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const [usuariosBD, setUsuariosBD] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setUsuariosBD(res.data));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const validar = validarLogin(usuariosBD, user);

    if (validar === true) {
      axios.post("http://localhost:3000/users/login", user);
      alert("Login exitoso");
    } else {
      alert("Datos incorrectos");
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className={styles.containerLogin}>
      <h2>Login</h2>
      <div>
        <label>Username</label>
        <input type="text" name="username" onChange={handleInputChange}></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
        ></input>
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
