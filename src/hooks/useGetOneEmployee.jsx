import { useQuery } from "@tanstack/react-query";
import useLoggedUser from "./useLoggedUser";

const useGetOneEmployee = (cedula) => {
  const user = useLoggedUser((state) => state.user);

  return useQuery({
    queryKey: ["empleados", cedula],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:8080/api/empleado/listar/${cedula}`,
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
  });
};

export default useGetOneEmployee;
