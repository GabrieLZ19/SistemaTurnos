import axios from "axios";
import Swal from "sweetalert2";

import styles from "./Turnos.module.css";
import { useDispatch } from "react-redux";
import { cancelAppointments } from "../../redux/reducer";

const Turnos = ({ turnos: { id, time, date, description, status } }) => {
  const dispatch = useDispatch();

  const cancelAppointmentHandler = async () => {
    try {
      await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
      dispatch(cancelAppointments(id));
      Swal.fire({
        title: "¡Turno Cancelado!",
        text: "Tu turno fue cancelado",
        icon: "success",
      });
    } catch (error) {
      console.error("Error al cancelar el turno:", error);
      Swal.fire({
        title: "Error!",
        text: "Hubo un error al cancelar el turno",
        icon: "error",
      });
    }
  };

  const handleOnClick = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Este cambio no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cancelar turno",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Cancelando turno...",
          text: "Por favor espere...",
          icon: "info",
          allowOutsideClick: false,
          allowEscapeKey: false,
          showConfirmButton: false,
        });
        cancelAppointmentHandler();
      }
    });
  };

  return (
    <div className={styles.containerTurnos}>
      <h4>{date} </h4>
      <h4>{time} </h4>
      <h4> {description}</h4>
      <h4>{status} </h4>
      <button onClick={handleOnClick} disabled={status === "cancelled"}>
        Cancelar Turno
      </button>
    </div>
  );
};

export default Turnos;
