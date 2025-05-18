import { useMutation, useQueryClient } from "@tanstack/react-query";
import useLoggedUser from "./useLoggedUser";

const useDeleteEmployee = () => {
  const queryClient = useQueryClient();
  const user = useLoggedUser((state) => state.user);

  return useMutation({
    mutationFn: async (employeeId) => {
      const response = await fetch(
        `http://localhost:8080/api/empleado/eliminar/${employeeId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
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
