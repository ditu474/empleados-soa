import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

import useDeleteEmployee from "@/hooks/useDeleteEmployee";

const DeleteEmployee = ({ employeeId }) => {
  const { mutate: deleteEmployee, isLoading } = useDeleteEmployee();

  const handleOnDelete = () => {
    deleteEmployee(employeeId);
  };

  return (
    <IconButton
      aria-label="delete"
      color="error"
      onClick={handleOnDelete}
      disabled={isLoading}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteEmployee;
