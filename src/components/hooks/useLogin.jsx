import { useMutation } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance"; // adjust path as needed

const loginUser = async (userData) => {
  const response = await axiosInstance.post("/Auth/login", userData);
  return response.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("Login successful:", data);
      // localStorage.setItem("token", data.token);
      // navigate("/dashboard");
    },
    onError: (error) => {
      console.error(
        "Login failed:",
        error?.response?.data?.message || error.message
      );
    },
  });
};
