import axios, { AxiosError } from "axios";
import { setCookie } from "../utils";
import { toast } from "react-toastify";
import { User } from "../auth/authType";

type cartUserReqData = {
  id: string;
  course_id: string;
};

type UserData = {
  id: string;
  name: string;
  email: string;
  token: string;
};

// Function to retrieve user object from localStorage
const getUserFromLocalStorage = (): UserData | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Function to create Axios config with user token
const getConfigWithToken = (): { headers: { Authorization: string } } => {
  const user = getUserFromLocalStorage();
  const token = user ? user.token : "";
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const createCartService = () => {
  const addToCart = async (data: cartUserReqData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/users/addtocart",
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
        "http://localhost:5000/users/removefromcart",
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
        toast("Error Adding To cart", { type: "error" });
        throw new Error("Error Adding to Cart");
      }
    }
  };
  const getCart = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/users/getCart",
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
