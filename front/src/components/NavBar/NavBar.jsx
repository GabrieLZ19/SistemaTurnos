import styles from "../NavBar/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <ul className={styles.containerList}>
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
    </div>
  );
};

export default NavBar;
