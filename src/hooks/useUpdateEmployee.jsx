import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      cedula,
      nombre,
      fechaIngreso,
      rutaFoto,
      idCargo,
      nombreCargo,
    }) => {
      const response = await fetch(
        `http://localhost:8080/api/empleado/actualizar/${cedula}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
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
