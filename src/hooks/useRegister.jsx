import { useQuery } from "@tanstack/react-query";

const useRegister = () =>
  useQuery({
    queryKey: ["register"],
    queryFn: async ({
      numeroIdentificacion,
      nombre,
      primerApellido,
      segundoApellido,
      telefono,
      email,
      contrasena,
      rol = "ADMIN",
    }) => {
      const response = await fetch("http://localhost:8080/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apiKey: "12345",
        },
        body: JSON.stringify({
          numeroIdentificacion,
          nombre,
          primerApellido,
          segundoApellido,
          telefono,
          email,
          contrasena,
          rol,
        }),
      });

      if (!response.ok) {
        throw new Error("Error Registering");
      }

      return response.json();
    },
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });

export default useRegister;
