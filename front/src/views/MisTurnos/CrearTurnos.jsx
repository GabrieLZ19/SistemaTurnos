import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useSelector } from "react-redux";
import { isDateValid, isTimeValid } from "../../helpers/validarFechayHora";
import styles from "../MisTurnos/CrearTurnos.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CrearTurnos = () => {
  const navigate = useNavigate();
  const usuario = useSelector((state) => state.user);

  const isFormValid = () => {
    const selectedDate = new Date(turno.date);
    const selectedTime = new Date(`2000-01-01T${turno.time}`);

    if (!isDateValid(selectedDate)) {
      showAlert(
        "La fecha seleccionada debe ser un dia posterior al dia actual."
      );
      return false;
    }

    if (!isTimeValid(selectedTime)) {
      showAlert("La hora no esta dentro de la franga horaria disponible.");
      return false;
    }

    return true;
  };

  const showAlert = (message) => {
    Swal.fire({
      title: "Error!",
      text: message,
      icon: "error",
    });
  };

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (
      (currentHour >= 9 && currentHour < 13) ||
      (currentHour >= 16 && currentHour < 21)
    ) {
      return;
    }

    const timerCountDown = Swal.mixin({
      timer: 5000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    timerCountDown
      .fire({
        title: "La hora actual no está dentro del horario de atención.",
        text: "Redirigiendo al home en 5 segundos...",
        icon: "warning",
        showConfirmButton: false,
      })
      .then(() => {
        navigate("/");
      });
  }, []);

  const [turno, setTurno] = useState({
    date: "",
    time: "",
    description: "",
    userId: usuario.id,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTurno({
      ...turno,
      [name]: value,
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3000/appointments/schedule", turno);

      Swal.fire({
        title: "¡Turno Creado!",
        text: "Tu turno fue guardado correctamente",
        icon: "success",
      });
    } catch (error) {
      console.error("Error al crear el turno:", error);
      Swal.fire({
        title: "Error!",
        text: "Hubo un error al crear el turno",
        icon: "error",
      });
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className={styles.containerForm}>
      <h2>Crear Turno </h2>
      <span style={{ color: "white" }}>
        Horarios de atención: 09:00 a 13:00 y 16:00 a 21:00
      </span>
      <div>
        <div className={styles.containerInputs}>
          <label>Fecha</label>
          <input type="date" name="date" onChange={handleInputChange} />
        </div>

        <div className={styles.containerInputs}>
          <label>Hora</label>
          <input type="time" name="time" onChange={handleInputChange} />
        </div>

        <div className={styles.containerInputs}>
          <label>Asunto</label>
          <input
            type="text"
            name="description"
            onChange={handleInputChange}
            style={{ width: "300px" }}
          />
        </div>

        <button type="submit" disabled={!isFormValid()}>
          Crear
        </button>
      </div>
    </form>
  );
};

export default CrearTurnos;
