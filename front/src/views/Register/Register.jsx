import axios from "axios";
import { useEffect, useState } from "react";
import { validar } from "../../helpers/validar";
import { validarFormulario } from "../../helpers/validarForm";
import styles from "./register.module.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
  });

  const [checkForm, setCheckForm] = useState({});

  const [errors, setErrors] = useState({ username: "", email: "", nDni: "" });

  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUser(response.data);
      } catch (error) {
        console.error(
          "Error al obtener los usuarios de la base de datos:",
          error
        );
      }
    };

    fetchData();
  }, []);

  console.log(form);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });

    const mensajeError = validar(user, name, value);
    setErrors({
      ...errors,
      [name]: mensajeError,
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const errores = validarFormulario(form);
    if (Object.keys(errores).length === 0) {
      await axios.post("http://localhost:3000/users/register", form);

      Swal.fire({
        title: "Registro Exitoso",
        text: "Tus datos fueron almacenados",
        icon: "success",
      });

      navigate("/login");
    } else {
      Swal.fire({
        title: "Oops...",
        text: "Algo salio mal!",
        icon: "error",
      });
      setCheckForm(errores);
    }
  };

  const handleOnClick = () => {
    navigate("/login");
  };

  return (
    <form onSubmit={handleOnSubmit} className={styles.containerForm}>
      <h2>Registro </h2>

      <div className={styles.containerCampos}>
        <div className={styles.containerName}>
          <label>Nombre</label>
          <input
            type="text"
            value={form.name}
            name="name"
            onChange={handleInputChange}
          />
        </div>
        {checkForm.name && <span>{checkForm.name}</span>}
        <div>
          <label>Email</label>
          <input
            type="email"
            value={form.email}
            name="email"
            placeholder="nombre@email.com"
            onChange={handleInputChange}
          />
        </div>

        {errors.email && <span>{errors.email}</span>}
        {checkForm.email && <span>{checkForm.email}</span>}

        <div>
          <label>Fecha de Nacimiento</label>
          <input
            type="date"
            value={form.birthdate}
            name="birthdate"
            onChange={handleInputChange}
          />
        </div>
        {checkForm.birthdate && <span>{checkForm.birthdate}</span>}
        <div>
          <label>DNI</label>
          <input
            type="number"
            value={form.nDni}
            name="nDni"
            onChange={handleInputChange}
          />
        </div>
        {errors.nDni && <span>{errors.nDni}</span>}
        {checkForm.nDni && <span>{checkForm.nDni}</span>}
        <div>
          <label>Usuario</label>
          <input
            type="text"
            value={form.username}
            name="username"
            onChange={handleInputChange}
          />
        </div>
        {errors.username && <span>{errors.username}</span>}
        {checkForm.username && <span>{checkForm.username}</span>}
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            value={form.password}
            name="password"
            onChange={handleInputChange}
          />
        </div>
        {errors.password && <span>{errors.password}</span>}
        {checkForm.password && <span>{checkForm.password}</span>}
      </div>
      <div className={styles.containerButtons}>
        <button onClick={handleOnClick} className={styles.buttons}>
          Volver
        </button>
        <button type="submit" className={styles.buttons}>
          Registrarse
        </button>
      </div>
    </form>
  );
};

export default Register;
