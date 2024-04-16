import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Error() {
  const navigate = useNavigate();

  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdownInterval);
      navigate("/");
    }, 5000);

    return () => clearInterval(countdownInterval);
  }, [navigate]);

  return (
    <div>
      <h1 style={{ color: "white", fontSize: "30px", textAlign: "center" }}>
        Page Not Found
      </h1>
      <p style={{ color: "white", fontSize: "30px", textAlign: "center" }}>
        Redireccionando a Login en {countdown}segundos...{" "}
      </p>
    </div>
  );
}
export default Error;
