import { useMutation } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const forgetPassword = async (userData) => {
  const response = await axiosInstance.post("/auth/forgot-password", userData);

  return response.data;
};

export const useForgetPassword = () => {
  return useMutation({
    mutationFn: forgetPassword,
  });
};
