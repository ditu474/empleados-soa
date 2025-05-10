import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (employeeId) => {
      const response = await fetch(
        `http://localhost:8080/api/empleado/eliminar/${employeeId}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        throw new Error("Error deleting empleado");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["empleados"],
        exact: true,
      });
    },
  });
};
export default useDeleteEmployee;
