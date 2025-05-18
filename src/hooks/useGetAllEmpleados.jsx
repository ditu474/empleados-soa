import { useQuery } from "@tanstack/react-query";
import useLoggedUser from "./useLoggedUser";

const useGetAllEmpleados = () => {
  const user = useLoggedUser((state) => state.user);

  return useQuery({
    queryKey: ["empleados"],
    queryFn: async () => {
      const response = await fetch(
        "http://localhost:8080/api/empleado/listar",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      if (!response.ok) {
        throw new Error("Error fetching empleados");
      }
      return response.json();
    },
    refetchOnWindowFocus: true,
  });
};

export default useGetAllEmpleados;
