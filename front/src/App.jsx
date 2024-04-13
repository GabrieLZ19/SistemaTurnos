import NavBar from "./components/NavBar/NavBar.jsx";
import "./App.module.css";
// import Login from "./views/Login/Login.jsx";
import MisTurnos from "./views/MisTurnos/MisTurnos";
// import Register from "./views/Register/Register.jsx";

function App() {
  return (
    <>
      <NavBar />
      {/*<Login />*/}
      {<MisTurnos />}
      {/*<Register />*/}
    </>
  );
}

export default App;
