import Turnos from "../../components/Turnos/Turnos";
import axios from "axios";
import styles from "./MisTurnos.module.css";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

const MisTurnos = () => {
  const [turns, setMyTurns] = useState([]);
  const [usuariosBD, setUsuariosBD] = useState([]);
  const userlogin = useSelector((state) => state.user);

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

  useEffect(() => {
    const user = usuariosBD.find(
      (user) =>
        user.credential.username === userlogin[0].username &&
        user.credential.password === userlogin[0].password
    );

    if (user) {
      setMyTurns(user.turno);
    }
  }, [usuariosBD, userlogin]);

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
