import { useMutation, useQueryClient } from "@tanstack/react-query";

import useLoggedUser from "./useLoggedUser";

const useCreateEmployee = () => {
  const queryClient = useQueryClient();
  const user = useLoggedUser((state) => state.user);

  return useMutation({
    mutationFn: async ({
      cedula,
      nombre,
      fechaIngreso,
      rutaFoto,
      nombreCargo,
    }) => {
      const response = await fetch(
        "http://localhost:8080/api/empleado/guardar",
        {
          method: "POST",
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
              nombreCargo,
            },
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Error creating empleado");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["empleados"], exact: true });
    },
  });
};
export default useCreateEmployee;
