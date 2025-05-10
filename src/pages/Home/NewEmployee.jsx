import { Button, Box } from "@mui/material";
import { useState } from "react";

import EmployeeDialog from "@/components/EmployeeDialog";

const NewEmployee = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = (formData) => {
    console.log(formData);
    handleClose();
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Crear Empleado
        </Button>
      </Box>
      <EmployeeDialog
        open={open}
        onClose={handleClose}
        onSend={handleSend}
        title="Crear Empleado"
        actionName="Crear"
        errorMessage="Error"
      />
    </>
  );
};

export default NewEmployee;
