import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import useLogin from "./useLogin";
import useLoggedUser from "@/hooks/useLoggedUser";

import "./styles.css";

const Login = ({ displayRegisterPage }) => {
  const { user, password, handleChangeUser, handleChangePassword, isEmpty } =
    useLogin();
  const setUser = useLoggedUser((state) => state.setUser);

  const handleSubmit = () => {
    setUser({ user, password });
  };

  return (
    <div className="root">
      <div className="login__form">
        <Typography variant="h1" gutterBottom>
          Ingresar
        </Typography>
        <TextField
          label="Documento"
          variant="outlined"
          className="login__input"
          value={user}
          onChange={handleChangeUser}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          type="password"
          className="login__input"
          value={password}
          onChange={handleChangePassword}
        />
        <Button
          variant="contained"
          className="login__button"
          disabled={isEmpty}
          onClick={handleSubmit}
        >
          Entrar
        </Button>
        <Button variant="text" onClick={displayRegisterPage}>
          Registrarme
        </Button>
      </div>
    </div>
  );
};

export default Login;
