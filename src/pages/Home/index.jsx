import { Typography, Button, Box } from "@mui/material";

import useGetAllEmpleados from "@/hooks/useGetAllEmpleados";
import FullScreenProgressIndicator from "@/components/FullScreenProgressIndicator";
import Table from "@/components/Table";
import FullScreenBox from "@/components/FullScreenBox";
import NewEmployee from "./NewEmployee";

const Home = () => {
  const { data, isLoading, error } = useGetAllEmpleados();

  if (isLoading && !data) {
    return <FullScreenProgressIndicator />;
  }

  if (error && !isLoading) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <>
      <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
        Empleados
      </Typography>
      <NewEmployee />
      <Table
        titles={["Cédula", "Nombre", "Fecha de ingreso", "Cargo"]}
        rows={data.map((empleado) => ({
          id: empleado.id,
          avatar: empleado.rutaFoto,
          cedula: empleado.cedula,
          values: [
            empleado.cedula,
            empleado.nombre,
            empleado.fechaIngreso,
            empleado.cargo.nombreCargo,
          ],
        }))}
      />
    </>
  );
};

export default Home;
