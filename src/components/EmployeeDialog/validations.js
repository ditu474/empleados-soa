import validator from "validator";
import { CARGOS } from "./index.jsx";

export const validateNombre = (nombre) => {
  if (!nombre) {
    return "El nombre es requerido";
  }
  if (nombre.length < 3) {
    return "El nombre debe tener al menos 3 caracteres";
  }
  if (nombre.trim().length > 20) {
    return "El nombre no puede tener más de 20 caracteres";
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
