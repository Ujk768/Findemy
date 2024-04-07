import axios, { AxiosError } from "axios";
import { setCookie } from "../utils";

type cartUserReqData = {
  id: string;
  courseId: string;
};

type UserData = {
  id: string;
  name: string;
  email: string;
  token: string;
};

const user = localStorage.getItem("user") as unknown as UserData;
const config = {
  headers: { Authorization: `Bearer ${user ? user.token : ""}` },
};

export const useCartService = () => {
  const addToCart = async (data: cartUserReqData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/users/addtocart",
        data,
        config
      );
      if (response.data) {
        setCookie("cart", response.data);
      }
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message;
        throw new Error(message);
      } else throw new Error("Error Adding to Cart");
    }
  };

  const removeFromCart = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/users/removefromcart",
        data,
        config
      );
      if (response.data) {
        setCookie("cart", response.data);
      }
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message;
        throw new Error(message);
      } else throw new Error("Error Removing from Cart");
    }
  };
  const getCart = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/users/getCart",
        data,
        config
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message;
        throw new Error(message);
      } else throw new Error("Error Removing from Cart");
    }
  };

  return {
    getCart,
    addToCart,
    removeFromCart,
  };
};
