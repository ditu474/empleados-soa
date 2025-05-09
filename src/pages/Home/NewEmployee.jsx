import { Button, Box } from "@mui/material";
import { useState } from "react";

const NewEmployee = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
      <Button variant="contained" color="primary">
        Crear Empleado
      </Button>
    </Box>
  );
};

export default NewEmployee;
