import { useState } from "react";
import { Dropdown } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../Dropdown/Dropdown.module.css";

const DropdownMenu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const usuario = useSelector((state) => state.user);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOnClick = () => {
    navigate("/appointments");
  };

  const handleOnClick2 = () => {
    navigate("/createTurn");
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
      <span onClick={toggleDropdown} style={{ cursor: "pointer" }}>
        {" "}
        Turnos
      </span>

      {isOpen && (
        <div style={{ position: "absolute", top: "100%", left: "0" }}>
          <Dropdown.Menu show={isOpen} onClose={closeDropdown}>
            <Dropdown.Item>
              <button
                onClick={handleOnClick2}
                disabled={!usuario.name}
                className={styles.buttonDrop}
              >
                Crear Turno
              </button>
            </Dropdown.Item>
            <Dropdown.Item>
              <button
                onClick={handleOnClick}
                disabled={!usuario.name}
                className={styles.buttonDrop}
              >
                Mis Turnos
              </button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
