import NavBar from "./components/NavBar/NavBar.jsx";

import HomePage from "./views/Home/Home.jsx";
import TurnosPage from "./views/MisTurnos/MisTurnos.jsx";
import LoginPage from "./views/Login/Login.jsx";
import RegisterPage from "./views/Register/Register.jsx";
import ErrorPage from "./views/Error/Error.jsx";
import { useLocation } from "react-router-dom";

import { Routes, Route } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/register" && (
        <NavBar />
      )}

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/appointments/:id" element={<TurnosPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
