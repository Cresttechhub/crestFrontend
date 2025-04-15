import { useMutation } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const resetToken = async (userData) => {
  const response = await axiosInstance.post(
    "/auth/validate-reset-token",
    userData
  );

  return response.data;
};

export const useResetToken = () => {
  return useMutation({
    mutationFn: resetToken,
  });
};
