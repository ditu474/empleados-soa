import validator from "validator";

export const validateCedula = (cedula) => {
  if (!cedula) {
    return "La cédula es requerida";
  }
  if (cedula.length < 6) {
    return "La cédula debe tener al menos 6 dígitos";
  }
  if (!validator.isNumeric(cedula)) {
    return "La cédula solo puede contener números";
  }
  if (cedula.length > 13) {
    return "La cédula no puede tener más de 13 dígitos";
  }

  return true;
};

export const validateNombre =
  ({ minLength, maxLength }) =>
  (nombre) => {
    if (!nombre) {
      return "El nombre es requerido";
    }
    if (nombre.length < minLength) {
      return `El nombre debe tener al menos ${minLength} caracteres`;
    }
    if (nombre.trim().length > maxLength) {
      return `El nombre no puede tener más de ${maxLength} caracteres`;
    }
    if (!validator.isAlpha(nombre, "es-ES", { ignore: " " })) {
      return "El nombre solo puede contener letras y espacios";
    }

    return true;
  };

export const validateTelefono = (telefono) => {
  if (!telefono) {
    return "El teléfono es requerido";
  }
  if (telefono.length < 7) {
    return "El teléfono debe tener al menos 7 dígitos";
  }
  if (!validator.isNumeric(telefono)) {
    return "El teléfono solo puede contener números";
  }
  if (telefono.length > 10) {
    return "El teléfono no puede tener más de 10 dígitos";
  }

  return true;
};

export const validateEmail = (email) => {
  if (!email) {
    return "El email es requerido";
  }
  if (!validator.isEmail(email)) {
    return "El email no es válido";
  }

  return true;
};

export const validateContrasena = (contrasena) => {
  if (!contrasena) {
    return "La contraseña es requerida";
  }

  if (contrasena.length < 8) {
    return "La contraseña debe tener al menos 8 caracteres";
  }

  if (contrasena.length > 20) {
    return "La contraseña no puede tener más de 20 caracteres";
  }

  if (!validator.isAlphanumeric(contrasena)) {
    return "La contraseña solo puede contener letras y números";
  }

  return true;
};

export const validateContrasenaRepetida = (contrasena, contrasenaRepetida) => {
  if (!contrasenaRepetida) {
    return "La contraseña repetida es requerida";
  }

  if (contrasena !== contrasenaRepetida) {
    return "Las contraseñas no coinciden";
  }

  return true;
};
