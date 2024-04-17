import styles from "./Turnos.module.css";
import axios from "axios";
import { useState } from "react";

const Turnos = ({ turnos: { id, time, date, description, status } }) => {
  const [turns, setMyTurns] = useState([]);

  const handleOnClick = async () => {
    try {
      // Enviar solicitud para cancelar el turno
      await axios.put(`http://localhost:3000/appointments/cancel/${id}`);

      // Obtener los turnos actualizados después de la cancelación
      const response = await axios.get("http://localhost:3000/appointments");

      // Actualizar el estado local de los turnos con los turnos actualizados
      setMyTurns(response.data);
    } catch (error) {
      console.error("Error al cancelar el turno:", error);
    }
  };
  return (
    <div className={styles.containerTurnos}>
      <h4>{date} </h4>
      <h4>{time} </h4>
      <h4> {description}</h4>
      <h4 name="status">{status} </h4>
      <button onClick={handleOnClick}>Cancelar</button>
    </div>
  );
};

export default Turnos;
