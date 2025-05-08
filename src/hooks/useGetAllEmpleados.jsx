import { useQuery } from "@tanstack/react-query";

const useGetAllEmpleados = () =>
  useQuery({
    queryKey: ["empleados"],
    queryFn: async () => {
      const response = await fetch(
        "http://localhost:8080/api/empleado/listar/",
      );
      if (!response.ok) {
        throw new Error("Error fetching empleados");
      }
      return response.json();
    },
    refetchOnWindowFocus: true,
  });

export default useGetAllEmpleados;
