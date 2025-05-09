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
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const cargos = {
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
}) => (
  <Dialog
    open={open}
    onClose={handleClose}
    slotProps={{
      paper: {
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          onSend(formJson);
        },
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
      />
      <TextField
        required
        margin="dense"
        id="urlFoto"
        name="urlFoto"
        label="URL Foto"
        type="text"
        fullWidth
        variant="standard"
      />
      <InputLabel htmlFor="date-picker">Fecha de ingreso</InputLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker id="date-picker" />
      </LocalizationProvider>
      <FormControl fullWidth>
        <InputLabel id="select-cargo-label">Cargo</InputLabel>
        <Select
          labelId="select-cargo-label"
          id="select-cargo"
          //value={age}
          label="Cargo"
          //onChange={handleChange}
        >
          <MenuItem value={1}>Scrum Master</MenuItem>
          <MenuItem value={2}>Desarrollador</MenuItem>
          <MenuItem value={3}>QA</MenuItem>
          <MenuItem value={4}>PO</MenuItem>
        </Select>
      </FormControl>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cerrar</Button>
      <Button type="submit">{actionName}</Button>
    </DialogActions>
  </Dialog>
);

export default EmployeeDialog;
