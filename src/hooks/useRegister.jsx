import { useMutation, useQueryClient } from "@tanstack/react-query";

const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      numeroIdentificacion,
      nombre,
      primerApellido,
      segundoApellido,
      telefono,
      email,
      contrasena,
      rol = "ADMIN",
    }) => {
      const response = await fetch(
        "http://localhost:8080/api/empleado/guardar/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
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
export default useRegister;
