import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

import { useEffect } from "react";

import EmployeeDialog, { CARGOS } from "@/components/EmployeeDialog";
import useGetOneEmployee from "@/hooks/useGetOneEmployee";
import useUpdateEmployee from "@/hooks/useUpdateEmployee";
import FullScreenProgressIndicator from "@/components/FullScreenProgressIndicator";

const EditEmployeeDialog = ({ employeeId, onClose }) => {
  const { data: employee, isLoading } = useGetOneEmployee(employeeId);
  const {
    mutateAsync: updateEmployee,
    isLoading: loadingUpdate,
    error,
  } = useUpdateEmployee();

  useEffect(() => {
    if (!isLoading && !employee) {
      onClose();
    }
  }, [isLoading, employee]);

  const handleSend = (formData) => {
    const newEmployee = {
      id: employee.id,
      cedula: formData.cedula,
      nombre: formData.nombre,
      rutaFoto: formData.urlFoto,
      fechaIngreso: dayjs(formData.fechaIngreso).format("DD-MM-YYYY"),
      idCargo: formData.cargo,
      nombreCargo: CARGOS[formData.cargo],
    };

    updateEmployee(newEmployee).then(() => {
      onClose();
    });
  };

  if (isLoading || !employee) {
    return <FullScreenProgressIndicator />;
  }

  return (
    <EmployeeDialog
      open
      onClose={onClose}
      onSend={handleSend}
      title="Editar Empleado"
      actionName="Actualizar"
      defaultValues={{
        cedula: employee.cedula,
        nombre: employee.nombre,
        urlFoto: employee.rutaFoto,
        fechaIngreso: dayjs(employee.fechaIngreso, "DD-MM-YYYY"),
        cargo: employee.cargo.idCargo,
      }}
      isLoading={loadingUpdate}
      errorMessage={error?.message}
    />
  );
};

export default EditEmployeeDialog;
