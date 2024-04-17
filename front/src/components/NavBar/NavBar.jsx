import DropdownMenu from "../Dropdown/Dropdown";
import styles from "../NavBar/NavBar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const userlogin = useSelector((state) => state.Login);
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/appointments");
  };

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
          <button
            className={styles.buttonNav}
            disabled={userlogin === false}
            onClick={handleOnClick}
          >
            Turnos
          </button>
          <div>
            <DropdownMenu />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
