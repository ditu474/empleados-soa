import validator from "validator";
import { CARGOS } from "./index.jsx";

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
  if (cedula.length > 15) {
    return "La cédula no puede tener más de 15 dígitos";
  }

  return true;
};

export const validateNombre = (nombre) => {
  if (!nombre) {
    return "El nombre es requerido";
  }
  if (nombre.length < 3) {
    return "El nombre debe tener al menos 3 caracteres";
  }
  if (nombre.length > 50) {
    return "El nombre no puede tener más de 50 caracteres";
  }
  if (!validator.isAlpha(nombre, "es-ES", { ignore: " " })) {
    return "El nombre solo puede contener letras y espacios";
  }

  return true;
};

export const validateFechaIngreso = (fechaIngreso) => {
  if (!fechaIngreso) {
    return "La fecha de ingreso es requerida";
  }

  return true;
};

export const validateUrlFoto = (urlFoto) => {
  if (urlFoto && !validator.isURL(urlFoto)) {
    return "La URL de la foto no es válida";
  }

  return true;
};

export const validateCargo = (cargo) => {
  if (!cargo) {
    return "El cargo es requerido";
  }
  if (!CARGOS[cargo]) {
    return "El cargo no es válido";
  }

  return true;
};
