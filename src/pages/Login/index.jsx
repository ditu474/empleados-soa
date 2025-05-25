import { useForm } from "react-hook-form";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useLogin from "@/hooks/useLogin";
import { CircularProgress } from "@mui/material";

import { validateEmail, validateContrasena } from "@/validators";

import "./styles.css";

const Login = ({ displayRegisterPage }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { mutateAsync, isLoading, isError } = useLogin();

  const handleLogin = ({ email, contrasena }) => {
    mutateAsync({ email, contrasena })
      .then(() => {
        reset();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="root">
      <div className="login__form">
        <Typography variant="h1" gutterBottom>
          Ingresar
        </Typography>
        <TextField
          autoFocus
          disabled={isLoading}
          label="Correo"
          type="email"
          variant="outlined"
          className="login__input"
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
          {...register("email", { validate: validateEmail })}
        />
        <TextField
          disabled={isLoading}
          label="Contraseña"
          variant="outlined"
          type="password"
          className="login__input"
          error={!!errors.contrasena}
          helperText={errors.contrasena ? errors.contrasena.message : ""}
          {...register("contrasena", { validate: validateContrasena })}
        />
        <Button
          variant="contained"
          className="login__button"
          onClick={handleSubmit(handleLogin)}
          disabled={isLoading}
        >
          {isLoading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Iniciar Sesión"
          )}
        </Button>
        <Button
          variant="text"
          onClick={displayRegisterPage}
          disabled={isLoading}
        >
          Registrarme
        </Button>
        {isError && (
          <Typography variant="body2" color="error">
            Error al iniciar sesión. Por favor, verifica tus credenciales.
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Login;
