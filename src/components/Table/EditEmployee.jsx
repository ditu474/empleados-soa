import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { useState } from "react";

import EditEmployeeDialog from "./EditEmployeeDialog";

const EditEmployee = ({ employeeCedula }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton aria-label="delete" color="info" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      {open && (
        <EditEmployeeDialog employeeId={employeeCedula} onClose={handleClose} />
      )}
    </>
  );
};

export default EditEmployee;
