import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import styles from "./Turnos.module.css";

const Turnos = ({ turnos: { id, time, date, description, status } }) => {
  const navigate = useNavigate();
  const [appointmentStatus, setAppointmentStatus] = useState(status);

  const handleOnClick = async () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Este cambio no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cancelar turno",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Cancelando turno...",
          text: "Por favor espere...",
          icon: "info",
          allowOutsideClick: false,
          allowEscapeKey: false,
          showConfirmButton: false,
        });

        try {
          // Realiza la solicitud para cancelar el turno
          await axios.put(`http://localhost:3000/appointments/cancel/${id}`);

          // Actualiza el estado del turno en la UI
          setAppointmentStatus("cancelled");

          Swal.fire({
            title: "¡Turno Cancelado!",
            text: "Tu turno fue cancelado",
            icon: "success",
          });

          // Navega a la página de turnos después de la cancelación
          navigate("/appointments");
        } catch (error) {
          // Si hay un error, muestra un mensaje de error y restaura el estado del turno
          setAppointmentStatus(status);
          Swal.fire({
            title: "Error!",
            text: "Hubo un error al cancelar el turno",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className={styles.containerTurnos}>
      <h4>{date} </h4>
      <h4>{time} </h4>
      <h4> {description}</h4>
      <h4>{appointmentStatus} </h4>
      {appointmentStatus === "active" && (
        <button onClick={handleOnClick}>Cancelar Turno</button>
      )}
    </div>
  );
};

export default Turnos;
