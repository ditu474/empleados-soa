import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Home from "@/pages/Home";
import useLoggedUser from "@/hooks/useLoggedUser";

import Typography from "@mui/material/Typography";

import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const user = useLoggedUser((state) => state.user);

  useEffect(() => {
    if (user) {
      setIsLogin(true);
    }
  }, [user]);

  const handleDisplayLoginPage = () => {
    setIsLogin((prevState) => !prevState);
  };

  if (user) return <Home />;

  return (
    <>
      <div className="login__header">
        <Typography variant="h6" color="white">
          Gestión De Empleados
        </Typography>
      </div>
      {isLogin ? (
        <Login displayRegisterPage={handleDisplayLoginPage} />
      ) : (
        <Register displayLoginPage={handleDisplayLoginPage} />
      )}
    </>
  );
}

export default App;
