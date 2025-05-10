import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

import useDeleteEmployee from "@/hooks/useDeleteEmployee";

const DeleteEmployee = ({ employeeId }) => {
  const { mutate: deleteEmployee, isLoading } = useDeleteEmployee();
  const [open, setOpen] = useState(false);

  const handleOnDelete = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        aria-label="delete"
        color="error"
        onClick={handleOnDelete}
        disabled={isLoading}
      >
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Deseas eliminar este empleado?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Esta acción no se puede deshacer. ¿Estás seguro de que deseas
            eliminar este empleado?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={() => deleteEmployee(employeeId)} autoFocus>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteEmployee;
