import { useMutation } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const resetPassword = async (userData) => {
  const response = await axiosInstance.post("/auth/password-reset", userData);

  return response.data;
};

export const useResetPassword = () => {
  return useMutation({
    mutationFn: resetPassword,
  });
};
