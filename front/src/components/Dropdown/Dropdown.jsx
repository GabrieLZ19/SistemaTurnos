import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ position: "relative", width: "150px" }}>
      <img
        src="../src/assets/usuario.png"
        alt="Perfil"
        onClick={toggleDropdown}
        style={{
          cursor: "pointer",
        }}
      />

      {isOpen && (
        <div>
          <Dropdown.Menu show={isOpen} onClose={closeDropdown}>
            <Dropdown.Item>
              <Link to="/">Cerrar Sesión</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
