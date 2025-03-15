import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./styles.css";

const Register = ({ displayLoginPage }) => {
  return (
    <div className="register__form">
      <Typography variant="h1" gutterBottom>
        Regístrate
      </Typography>
      <TextField
        label="Documento"
        variant="outlined"
        className="register__input"
      />
      <TextField
        label="Correo"
        variant="outlined"
        className="register__input"
        type="email"
      />
      <TextField
        label="Nombre Completo"
        variant="outlined"
        className="register__input"
        type="email"
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        type="password"
        className="register__input"
      />
      <TextField
        label="Repetir Contraseña"
        variant="outlined"
        type="password"
        className="register__input"
      />
      <Button variant="contained" className="register__button">
        Registrarme
      </Button>
      <Button variant="text" onClick={displayLoginPage}>
        Ingresar
      </Button>
    </div>
  );
};

export default Register;
