import { useMutation } from "@tanstack/react-query";

import useLoggedUser from "./useLoggedUser";

const useLogin = () => {
  return useMutation({
    mutationFn: async ({ email, contrasena }) => {
      const response = await fetch("http://localhost:8080/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apiKey: "12345",
        },
        body: JSON.stringify({
          email,
          contrasena,
        }),
      });

      if (!response.ok) {
        throw new Error("Error Logging In");
      }

      const data = await response.json();
      if (+data.status !== 200) {
        throw new Error(data.description);
      }

      return data;
    },
    onSuccess: (user) => {
      useLoggedUser.setState({ user });
    },
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });
};

export default useLogin;
