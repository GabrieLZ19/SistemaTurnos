import styles from "./Turnos.module.css";

const Turnos = ({ turnos: { id, time, date, status } }) => {
  return (
    <div className={styles.containerTurnos}>
      <h3>{id} </h3>
      <h3>{date} </h3>
      <h3>{time} </h3>
      <h3>{status} </h3>
    </div>
  );
};

export default Turnos;
