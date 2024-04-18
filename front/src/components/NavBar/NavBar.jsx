import DropdownMenu from "../Dropdown/Dropdown";
import DropdownTurns from "../DropdownTurnos/DropdownTurnos";
import styles from "../NavBar/NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.imgContainer}>
        <img src="../src/assets/Logo.png" alt="logo" /> <p> MedicT</p>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.containerList}>
          <li className={styles.list}>
            <Link to="/">Inicio</Link>
          </li>
          <div>
            <DropdownTurns />
          </div>
          <div>
            <DropdownMenu />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
