
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
      //create user object with initials
      const user = {
        email: data.email,
        name: data.name,
        initials: data.name
          ? data.name.split(' ').map(word => word[0].toUpperCase()).join('')
          : data.email?.[0]?.toUpperCase() || 'N',
      };

      //store both token and user
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(user));

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
