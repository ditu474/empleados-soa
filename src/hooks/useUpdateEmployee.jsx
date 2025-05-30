import { useMutation, useQueryClient } from "@tanstack/react-query";
import useLoggedUser from "./useLoggedUser";

const useUpdateEmployee = () => {
  const queryClient = useQueryClient();
  const user = useLoggedUser((state) => state.user);

  return useMutation({
    mutationFn: async ({
      id,
      cedula,
      nombre,
      fechaIngreso,
      rutaFoto,
      idCargo,
      nombreCargo,
    }) => {
      const response = await fetch(
        `http://localhost:8080/api/empleado/actualizar/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            cedula,
            nombre,
            fechaIngreso,
            rutaFoto,
            cargo: {
              idCargo,
              nombreCargo,
            },
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Error updating empleado");
      }

      return response.json();
    },
    onSuccess: ({ cedula }) => {
      queryClient.invalidateQueries({
        queryKey: ["empleados", cedula],
        exact: true,
      });

      queryClient.invalidateQueries({
        queryKey: ["empleados"],
        exact: true,
      });
    },
  });
};
export default useUpdateEmployee;
