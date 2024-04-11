import Turnos from "../../components/Turnos/Turnos";
import turnos from "../../helpers/myTurns";
import styles from "./MisTurnos.module.css";
import { useState } from "react";

const MisTurnos = () => {
  const [turns, setMyTurns] = useState(turnos);

  return (
    <>
      <h1 className={styles.title}> Mis Turnos</h1>
      <ul className={styles.containerList}>
        <li>ID</li>
        <li>Date</li>
        <li>Time</li>
        <li>Status</li>
      </ul>
      <div className={styles.containerTurnos}>
        {turns.map((turnos) => (
          <Turnos key={turnos.id} turnos={turnos} />
        ))}
      </div>
    </>
  );
};

export default MisTurnos;
