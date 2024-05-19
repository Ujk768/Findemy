import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { getConfigWithToken } from "../utils";
import { BASE_URL } from "../../utils/interface";

type cartUserReqData = {
  id: string;
  course_id: string;
};

export const createCartService = () => {
  const addToCart = async (data: cartUserReqData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/users/addtocart`,
        data,
        getConfigWithToken()
      );
      toast(`${"Added to Cart"}`, { type: "success" });
      return response.data.data.course;
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message;
        toast(`${message}`, { type: "error" });
        throw new Error(message);
      } else {
        toast("Error Adding To cart", { type: "error" });
        throw new Error("Error Adding to Cart");
      }
    }
  };

  const removeFromCart = async (data) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/users/removefromcart`,
        data,
        getConfigWithToken()
      );
      toast(`${"Removed From Cart"}`, { type: "success" });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message;
        toast(`${message}`, { type: "error" });
        throw new Error(message);
      } else {
        toast("Error Removing from Cart", { type: "error" });
        throw new Error("Error Removing from Cart");
      }
    }
  };
  const getCart = async (data) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/users/getCart`,
        { id: data },
        getConfigWithToken()
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message;
        throw new Error(message);
      } else throw new Error("Error Getting from Cart");
    }
  };

  return {
    getCart,
    addToCart,
    removeFromCart,
  };
};
