import { useState } from "react";
import { Dropdown, DropdownHeader } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { sesionCerrada } from "../../redux/reducer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../Dropdown/Dropdown.module.css";

const DropdownMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const userlogin = useSelector((state) => state.Login);
  const usuario = useSelector((state) => state.user);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOnClick = () => {
    dispatch(sesionCerrada(userlogin));

    navigate("/");
  };

  const handleOnClick2 = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        width: "150px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src="../src/assets/usuario.png"
        alt="Perfil"
        onClick={toggleDropdown}
        style={{
          cursor: "pointer",
        }}
      />

      {isOpen && (
        <div style={{ position: "absolute", top: "100%", left: "0" }}>
          <Dropdown.Menu show={isOpen} onClose={closeDropdown}>
            <DropdownHeader>
              <p
                style={{
                  fontSize: "15px",
                  color: "orange",
                  fontWeight: "bold",
                }}
              >
                {usuario.length > 0
                  ? `Bienvenido/a, ${usuario[0].username}`
                  : "Bienvenido/a"}
              </p>
            </DropdownHeader>
            <Dropdown.Item>
              <button
                onClick={handleOnClick2}
                disabled={userlogin === true}
                className={styles.buttonDrop}
              >
                Iniciar Sesión
              </button>
            </Dropdown.Item>
            <Dropdown.Item>
              <button
                onClick={handleOnClick}
                disabled={userlogin === false}
                className={styles.buttonDrop}
              >
                Cerrar Sesión
              </button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
