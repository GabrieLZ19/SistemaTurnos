import { useEffect, useState } from "react";
import { validarLogin } from "../../helpers/validarLogin";
import axios from "axios";
import styles from "./Login.module.css";
import Swal from "sweetalert2";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const [usuariosBD, setUsuariosBD] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUsuariosBD(response.data);
      } catch (error) {
        console.error("Error al obtener datos de la base de datos:", error);
      }
    };

    fetchData();
  }, []);
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const validar = validarLogin(usuariosBD, user);

    if (validar === true) {
      await axios.post("http://localhost:3000/users/login", user);
      Swal.fire({
        title: "Login exitoso",
        text: "En breve ingresara en la pagina",
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salio mal!",
      });
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
