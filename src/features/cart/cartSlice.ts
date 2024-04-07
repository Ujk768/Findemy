import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
  cartCount: 0,
};

type cartUserReqData = {
  id: string;
  courseId: string;
}



export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: (state) => {
      state.cartCount = 0;
      state.cartItems = [];
    },
  }
});
