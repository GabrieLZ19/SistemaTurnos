import Carrousel from "../../components/Carrousel/Carrousel";
import styles from "../Home/Home.module.css";

const Home = () => {
  return (
    <div className={styles.containerMain}>
      <h1> Nuestros servicios</h1>

      <Carrousel />
    </div>
  );
};

export default Home;
