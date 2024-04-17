import { useEffect, useState } from "react";
import { validarLogin } from "../../helpers/validarLogin";
import axios from "axios";
import styles from "./Login.module.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sesionIniciada } from "../../redux/reducer";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const [usuariosBD, setUsuariosBD] = useState([]);

  const navigate = useNavigate();

  const dispatch = useDispatch();

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

      navigate("/");
      dispatch(sesionIniciada(user));
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
        <label>Usuario</label>
        <input type="text" name="username" onChange={handleInputChange}></input>
      </div>
      <div>
        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
        ></input>
      </div>

      <button type="submit">Ingresar</button>
      <div className={styles.containerRegister}>
        <label>¿Eres nuevo?</label>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <span>Registrate</span>
        </Link>
      </div>
    </form>
  );
};

export default Login;
