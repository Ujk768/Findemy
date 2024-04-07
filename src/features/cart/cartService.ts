import axios, { AxiosError } from "axios";

export const useCartService = () => {
  const addToCart = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/users/addtocart",
        data
      );
      return response;
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
        data
      );
      return response;
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
        data
      );
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message;
        throw new Error(message);
      } else throw new Error("Error Removing from Cart");
    }
  };
};
