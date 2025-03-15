import Login from "@/pages/Login";
import Typography from "@mui/material/Typography";

import "./App.css";

function App() {
  return (
    <>
      <div className="login__header">
        <Typography variant="h6" color="white">
          Gestión De Empleados
        </Typography>
      </div>
      <Login />
    </>
  );
}

export default App;
