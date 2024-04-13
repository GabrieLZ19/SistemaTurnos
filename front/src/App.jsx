import NavBar from "./components/NavBar/NavBar.jsx";
import "./App.module.css";
// import MisTurnos from "./views/MisTurnos/MisTurnos";
import Register from "./views/Register/Register.jsx";

function App() {
  return (
    <>
      <NavBar />

      {/*<MisTurnos /> */}
      <Register />
    </>
  );
}

export default App;
