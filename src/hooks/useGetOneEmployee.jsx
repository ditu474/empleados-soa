import { useQuery } from "@tanstack/react-query";

const useGetOneEmployee = (cedula) =>
  useQuery({
    queryKey: ["empleados", cedula],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:8080/api/empleado/listar/${cedula}`,
      );
      if (!response.ok) {
        throw new Error("Error fetching empleados");
      }
      return response.json();
    },
  });

export default useGetOneEmployee;
