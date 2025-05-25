import { useForm } from "react-hook-form";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";

import useRegister from "@/hooks/useRegister";
import {
  validateCedula,
  validateContrasena,
  validateEmail,
  validateNombre,
  validateTelefono,
  validateContrasenaRepetida,
} from "@/validators";

import "./styles.css";

const Register = ({ displayLoginPage }) => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();
  const { mutateAsync, isLoading, isError, error } = useRegister();

  const handleRegister = ({
    numeroIdentificacion,
    nombre,
    primerApellido,
    segundoApellido,
    telefono,
    email,
    contrasena,
  }) => {
    mutateAsync({
      numeroIdentificacion,
      nombre,
      primerApellido,
      segundoApellido,
      telefono,
      email,
      contrasena,
    })
      .then(() => {
        reset();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="register__form">
      <Typography variant="h1" gutterBottom>
        Regístrate
      </Typography>
      <TextField
        autoFocus
        label="Documento"
        variant="outlined"
        className="register__input"
        error={!!errors.numeroIdentificacion}
        helperText={
          errors.numeroIdentificacion ? errors.numeroIdentificacion.message : ""
        }
        {...register("numeroIdentificacion", { validate: validateCedula })}
      />
      <TextField
        label="Correo"
        variant="outlined"
        className="register__input"
        type="email"
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : ""}
        {...register("email", { validate: validateEmail })}
      />
      <TextField
        label="Nombre"
        variant="outlined"
        className="register__input"
        error={!!errors.nombre}
        helperText={errors.nombre ? errors.nombre.message : ""}
        {...register("nombre", {
          validate: validateNombre({
            minLength: 3,
            maxLength: 10,
          }),
        })}
      />
      <TextField
        label="Primer Apellido"
        variant="outlined"
        className="register__input"
        error={!!errors.primerApellido}
        helperText={errors.primerApellido ? errors.primerApellido.message : ""}
        {...register("primerApellido", {
          validate: validateNombre({
            minLength: 3,
            maxLength: 20,
          }),
        })}
      />
      <TextField
        label="Segundo Apellido"
        variant="outlined"
        className="register__input"
        error={!!errors.segundoApellido}
        helperText={
          errors.segundoApellido ? errors.segundoApellido.message : ""
        }
        {...register("segundoApellido", {
          validate: validateNombre({
            minLength: 3,
            maxLength: 20,
          }),
        })}
      />
      <TextField
        label="Telefono"
        variant="outlined"
        className="register__input"
        error={!!errors.telefono}
        helperText={errors.telefono ? errors.telefono.message : ""}
        {...register("telefono", { validate: validateTelefono })}
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        type="password"
        className="register__input"
        error={!!errors.contrasena}
        helperText={errors.contrasena ? errors.contrasena.message : ""}
        {...register("contrasena", { validate: validateContrasena })}
      />
      <TextField
        label="Repetir Contraseña"
        variant="outlined"
        type="password"
        className="register__input"
        error={!!errors.contrasenaRepetida}
        helperText={
          errors.contrasenaRepetida ? errors.contrasenaRepetida.message : ""
        }
        {...register("contrasenaRepetida", {
          validate: (contrasenaRepetida) =>
            validateContrasenaRepetida(
              getValues("contrasena"),
              contrasenaRepetida,
            ),
        })}
      />
      {isError && (
        <Typography variant="body2" color="error">
          {error.message || "Error al iniciar sesión, revisa tus datos."}
        </Typography>
      )}
      <Button
        variant="contained"
        className="register__button"
        disabled={isLoading}
        onClick={handleSubmit(handleRegister)}
      >
        {isLoading ? <CircularProgress size={24} /> : "Registrarme"}
      </Button>
      <Button variant="text" onClick={displayLoginPage} disabled={isLoading}>
        ¿Ya tienes cuenta? Inicia sesión
      </Button>
    </div>
  );
};

export default Register;
