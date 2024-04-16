import Turnos from "../../components/Turnos/Turnos";
import axios from "axios";
import styles from "./MisTurnos.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MisTurnos = () => {
  const [turns, setMyTurns] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/appointments/${id}`
        );
        setMyTurns(response.data);
      } catch (error) {
        console.error(
          "Error al obtener los turnos de la base de datos:",
          error
        );
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <h1 className={styles.title}> Mis Turnos</h1>
      <ul className={styles.containerList}>
        <li>Date</li>
        <li>Time</li>
        <li>Description</li>
        <li>Status</li>
        <li>Actions</li>
      </ul>

      {!turns.length ? (
        <div>
          <h2>No hay turnos </h2>
        </div>
      ) : (
        <div className={styles.containerTurnos}>
          {turns?.map((turnos) => (
            <Turnos key={turnos.id} turnos={turnos} />
          ))}
        </div>
      )}
    </>
  );
};

export default MisTurnos;
