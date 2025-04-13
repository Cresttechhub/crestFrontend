import { useMutation } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const loginUser = async (userData) => {
  const response = await axiosInstance.post("/auth/login", userData);

  return response.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("Login successful:", data);
      localStorage.setItem("token", data.token);
      navigate("/");
    },
    onError: (error) => {
      console.error(
        "Login failed:",
        error?.response?.data?.message || error.message
      );
    },
  });
};
