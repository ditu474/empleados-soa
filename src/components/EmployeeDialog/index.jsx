import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  DialogContentText,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Button,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm } from "react-hook-form";
import {
  validateCargo,
  validateCedula,
  validateFechaIngreso,
  validateNombre,
  validateUrlFoto,
} from "./validations";

export const CARGOS = {
  1: "Scrum Master",
  2: "Desarrollador",
  3: "QA",
  4: "PO",
};

const EmployeeDialog = ({
  open,
  onClose,
  onSend,
  title,
  actionName,
  errorMessage,
  defaultValues,
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      cedula: defaultValues?.cedula || "",
      nombre: defaultValues?.nombre || "",
      urlFoto: defaultValues?.urlFoto || "",
      fechaIngreso: defaultValues?.fechaIngreso || null,
      cargo: defaultValues?.cargo || "",
    },
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          component: "form",
          onSubmit: handleSubmit(onSend),
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      {errorMessage && (
        <DialogContentText sx={{ color: "red" }}>
          {errorMessage}
        </DialogContentText>
      )}
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="cedula"
          name="cedula"
          label="Cédula"
          type="text"
          fullWidth
          variant="standard"
          {...register("cedula", { required: true, validate: validateCedula })}
        />
        <TextField
          required
          margin="dense"
          id="nombre"
          name="nombre"
          label="Nombre"
          type="text"
          fullWidth
          variant="standard"
          {...register("nombre", { required: true, validate: validateNombre })}
        />
        <TextField
          margin="dense"
          id="urlFoto"
          name="urlFoto"
          label="URL Foto"
          type="text"
          fullWidth
          variant="standard"
          {...register("urlFoto", { validate: validateUrlFoto })}
        />
        <InputLabel htmlFor="date-picker" sx={{ marginTop: 3 }}>
          Fecha de ingreso*
        </InputLabel>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            id="date-picker"
            disableFuture
            minDate="2024-01-01"
            {...register("fechaIngreso", {
              required: true,
              validate: validateFechaIngreso,
            })}
          />
        </LocalizationProvider>
        <FormControl fullWidth sx={{ marginTop: 3 }}>
          <InputLabel id="select-cargo-label">Cargo</InputLabel>
          <Select
            labelId="select-cargo-label"
            id="select-cargo"
            label="Cargo"
            name="cargo"
            {...register("cargo", { required: true, validate: validateCargo })}
          >
            {Object.entries(CARGOS).map(([key, value]) => (
              <MenuItem key={key} value={key}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cerrar</Button>
        <Button type="submit">{actionName}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmployeeDialog;
