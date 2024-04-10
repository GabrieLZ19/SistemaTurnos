import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.containerList}>
        <li className={styles.list}>
          <img src="src/assets/Logo.jpg" alt="logo"></img>
        </li>
        <li className={styles.list}>
          <a href="#"> Inicio</a>
        </li>
        <li className={styles.list}>
          <a href="#"> Tramite</a>
        </li>
        <li className={styles.list}>
          <a href="#"> Usuario</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
