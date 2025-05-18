import { Button, Box } from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";

import EmployeeDialog, { CARGOS } from "@/components/EmployeeDialog";
import useCreateEmployee from "@/hooks/useCreateEmployee";

const NewEmployee = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { mutateAsync: createEmployee, error } = useCreateEmployee();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = (formData) => {
    const newEmployee = {
      cedula: formData.cedula,
      nombre: formData.nombre.trim(),
      rutaFoto: formData.urlFoto.trim(),
      fechaIngreso: dayjs(formData.fechaIngreso).format("DD-MM-YYYY"),
      nombreCargo: CARGOS[formData.cargo],
    };
    setLoading(true);
    createEmployee(newEmployee)
      .then(() => {
        handleClose();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Crear Empleado
        </Button>
      </Box>
      {open && (
        <EmployeeDialog
          open={open}
          onClose={handleClose}
          onSend={handleSend}
          title="Crear Empleado"
          actionName="Crear"
          errorMessage={error?.message}
          loading={loading}
        />
      )}
    </>
  );
};

export default NewEmployee;
