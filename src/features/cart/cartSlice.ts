import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type cartUserReqData = {
  id: string;
  courseId: string;
};

const initialState = {
  cartItems: [] as cartUserReqData[],
  cartCount: 0,
  cartLoading: false,
};

export const addToCart = createAsyncThunk(
  "users/addToCart",
  async (data: cartUserReqData, thunkAPI) => {
    try {
      const response = await addToCart(data);
      return response;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Add To Cart Error";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "users/removeFromCart",
  async (data: cartUserReqData, thunkAPI) => {
    try {
      const response = await removeFromCart(data);
      return response;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Add To Cart Error";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: (state) => {
      state.cartCount = 0;
      state.cartItems = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cartCount += 1;
        state.cartItems = action.payload;
        state.cartLoading = false;
      })
      .addCase(addToCart.pending, (state, action) => {
        state.cartLoading = true;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.cartLoading = false;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.cartCount -= 1;
        state.cartItems = action.payload;
        state.cartLoading = false;
      })
      .addCase(removeFromCart.pending, (state, action) => {
        state.cartLoading = true;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.cartLoading = false;
      });
  },
});
export const { reset } = cartSlice.actions;
export default  cartSlice.reducer;
