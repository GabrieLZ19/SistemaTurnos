import styles from "./Turnos.module.css";

const Turnos = ({ turnos: { time, date, description, status } }) => {
  return (
    <div className={styles.containerTurnos}>
      <h4>{date} </h4>
      <h4>{time} </h4>
      <h4> {description}</h4>
      <h4>{status} </h4>
      <button>Cancelar</button>
    </div>
  );
};

export default Turnos;
