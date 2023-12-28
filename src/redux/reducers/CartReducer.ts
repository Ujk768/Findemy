import { createSlice } from "@reduxjs/toolkit";
import { ICourseDetails, IUserDetails } from "../../utils/interface";

type CartData = {
  cart: ICourseDetails[];
};
const initialState: CartData = {
  cart: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      return state;
    },
    setCart: (state, action) => {
      state.cart = action.payload
      return state
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.cart.filter(
        (cartItem) => cartItem._id.toString() !== action.payload._id.toString()
      );
      state.cart = updatedCart;
      return state;
    },
  },
});

export const { addToCart, removeFromCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
