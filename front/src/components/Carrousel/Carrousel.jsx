import styles from "../Carrousel/Carrousel.module.css";

const Carrousel = () => {
  return (
    <div className={styles.containerCarrousel}>
      <div>
        <img src="../src/assets/slide1.jpg" alt="Slide 1" />
        <h3>Vacunacion integral 2024</h3>
        <p>Gratuita para grupos de riesgo</p>
      </div>
      <div>
        <img src="../src/assets/slide2.jpg" alt="Slide 2" />
        <h3>APP MedicT</h3>
        <p>Disponible en Android y IOS</p>
      </div>
      <div>
        <img src="../src/assets/slide3.jpg" alt="Slide 3" />
        <h3>Programa tus turnos</h3>
        <p>De forma agil y personalizada</p>
      </div>
    </div>
  );
};

export default Carrousel;
