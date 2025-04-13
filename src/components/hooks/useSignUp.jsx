import { useMutation } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const createUser = async (userData) => {
  const response = await axiosInstance.post("/auth", userData);
  return response.data;
};

const useSignup = () => {
  return useMutation({
    mutationFn: createUser,
  });
};

export default useSignup;
