import { useMutation } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const createUser = async (userData) => {
  const response = await axiosInstance.post("/auth/verify-otp", userData);
  return response.data;
};

const useVerifyOtp = () => {
  return useMutation({
    mutationFn: createUser,
  });
};

export default useVerifyOtp;
