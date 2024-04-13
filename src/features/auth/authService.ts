import axios, { AxiosError } from "axios";
import { IRegisterUserData, ILoginUserData } from "./authType";
import { toast } from "react-toastify";

const REGISTER_API_URL = "http://localhost:5000/users/signup";
const LOGIN_API_URL = "http://localhost:5000/users/login";

export const createAuthService = () => {
  //Register User

  const registerUser = async (userData: IRegisterUserData) => {
    try {
      const response = await axios.post(REGISTER_API_URL, userData);
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message;
        throw new Error(message);
      } else throw new Error("Register error");
    }
  };

  const loginUser = async (userData: ILoginUserData) => {
    try {
      const response = await axios.post(LOGIN_API_URL, userData);
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message;
        throw new Error(message);
      } else throw new Error("Login error");
    }
  };

  const logOutUser = () => {
    localStorage.removeItem("user");
    toast("Logged Out", { type: "success" });
    localStorage.removeItem("cart");
  };

  return {
    registerUser,
    loginUser,
    logOutUser,
  };
};
