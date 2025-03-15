import { useState } from "react";

const useLogin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUser = (event) => {
    setUser(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const isEmpty = !user || !password;

  return {
    user,
    password,
    handleChangeUser,
    handleChangePassword,
    isEmpty,
  };
};

export default useLogin;
