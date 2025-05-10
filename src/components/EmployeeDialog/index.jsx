import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  DialogContentText,
  InputLabel,
  MenuItem,
  FormControl,
  Button,
  FormHelperText,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
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
  loading,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      cedula: defaultValues?.cedula || "",
      nombre: defaultValues?.nombre || "",
      urlFoto: defaultValues?.urlFoto || "",
      fechaIngreso: defaultValues?.fechaIngreso || null,
      cargo: defaultValues?.cargo || 1,
    },
  });

  useEffect(() => {
    if (!open) reset();
  }, [open]);

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
          disabled={loading}
          autoFocus
          margin="dense"
          id="cedula"
          name="cedula"
          label="Cédula"
          type="text"
          fullWidth
          variant="standard"
          error={!!errors.cedula}
          helperText={errors.cedula ? errors.cedula.message : ""}
          {...register("cedula", { validate: validateCedula })}
        />
        <TextField
          disabled={loading}
          margin="dense"
          id="nombre"
          name="nombre"
          label="Nombre"
          type="text"
          fullWidth
          variant="standard"
          error={!!errors.nombre}
          helperText={errors.nombre ? errors.nombre.message : ""}
          {...register("nombre", { validate: validateNombre })}
        />
        <TextField
          disabled={loading}
          margin="dense"
          id="urlFoto"
          name="urlFoto"
          label="URL Foto"
          type="text"
          fullWidth
          variant="standard"
          error={!!errors.urlFoto}
          helperText={errors.urlFoto ? errors.urlFoto.message : ""}
          {...register("urlFoto", { validate: validateUrlFoto })}
        />
        <InputLabel htmlFor="date-picker" sx={{ marginTop: 3 }}>
          Fecha de ingreso*
        </InputLabel>
        <Controller
          name="fechaIngreso"
          control={control}
          defaultValue={defaultValues?.fechaIngreso || null}
          rules={{ validate: validateFechaIngreso }}
          render={({ field }) => (
            <>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker {...field} disableFuture disabled={loading} />
              </LocalizationProvider>
              {errors.fechaIngreso && (
                <FormHelperText error>
                  {errors.fechaIngreso.message}
                </FormHelperText>
              )}
            </>
          )}
        />
        <FormControl fullWidth sx={{ marginTop: 3 }}>
          <TextField
            required
            disabled={loading}
            margin="dense"
            id="select-cargo"
            label="Cargo"
            name="cargo"
            select
            fullWidth
            defaultValue={defaultValues?.cargo || 1}
            error={!!errors.cargo}
            helperText={errors.cargo ? errors.cargo.message : ""}
            {...register("cargo", { validate: validateCargo })}
          >
            {Object.entries(CARGOS).map(([key, value]) => (
              <MenuItem key={key} value={key}>
                {value}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Cerrar
        </Button>
        <Button type="submit" disabled={loading}>
          {actionName}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmployeeDialog;
