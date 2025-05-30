import TableMUI from "@mui/material/Table";
import {
  Avatar,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Stack,
} from "@mui/material";

import DeleteEmployee from "./DeleteEmployee";
import EditEmployee from "./EditEmployee";

const Table = ({ titles, rows }) => (
  <TableContainer component={Paper}>
    <TableMUI sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell key="empty-avatar-header" sx={{ width: 50 }}>
            &nbsp;
          </TableCell>
          {titles.map((title) => (
            <TableCell key={title}>{title}</TableCell>
          ))}
          <TableCell key="empty-options-header">&nbsp;</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell key={`${row.id}-avatar`}>
              <Avatar src={row.avatar} />
            </TableCell>
            {row.values.map((value) => (
              <TableCell key={`${row.id}-${value}`}>{value}</TableCell>
            ))}
            <TableCell key={`${row.id}-actions`} align="right">
              <Stack direction="row" spacing={1} justifyContent="center">
                <DeleteEmployee employeeId={row.id} />
                <EditEmployee employeeCedula={row.cedula} />
              </Stack>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableMUI>
  </TableContainer>
);

export default Table;
