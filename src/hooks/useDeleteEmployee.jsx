import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ cedula }) => {
      const response = await fetch(
        `http://localhost:8080/api/empleado/eliminar/${cedula}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        throw new Error("Error deleting empleado");
      }

      return { cedula };
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
export default useDeleteEmployee;
