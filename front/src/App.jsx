import NavBar from "./components/NavBar/NavBar.jsx";

import HomePage from "./views/Home/Home.jsx";
import TurnosPage from "./views/MisTurnos/MisTurnos.jsx";
import LoginPage from "./views/Login/Login.jsx";
import RegisterPage from "./views/Register/Register.jsx";
import CreateTurnPage from "./views/MisTurnos/CrearTurnos.jsx";
import ErrorPage from "./views/Error/Error.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/appointments" element={<TurnosPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/createTurn" element={<CreateTurnPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
