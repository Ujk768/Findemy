import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCartService } from "./cartService";

const { addToCart, removeFromCart, getCart } = createCartService();

const user = localStorage.getItem("user");

const cartItems = localStorage.getItem("cart");
type User = {
  name: string;
  email: string;
  id: string;
};
type cartUserReqData = {
  id: string;
  course_id: string;
};
type cartItemsType = {
  _id: string;
};

const initialState = {
  cartItems: [] as cartItemsType[],
  cartCount: 0,
  cartLoading: false,
  message: "",
};

export const getCartDetails = createAsyncThunk(
  "users/getCart",
  async (data: string, thunkAPI) => {
    try {
      const response = await getCart(data);
      return response.data;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Error getting Cart Details";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addToCartAction = createAsyncThunk(
  "users/addToCartAction",
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

export const removeFromCartAction = createAsyncThunk(
  "users/removeFromCartAction",
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
      state.cartLoading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCartDetails.fulfilled, (state, action) => {
        const updatedCart = [...state.cartItems];
        updatedCart.push(action.payload);
        state.cartItems = action.payload;
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        state.cartCount = updatedCart.length;
      })
      .addCase(getCartDetails.rejected, (state, action) => {
        state.cartCount = 0;
        state.cartItems = [];
      })
      .addCase(getCartDetails.pending, (state, action) => {
        state.cartLoading = true;
      })
      .addCase(addToCartAction.fulfilled, (state, action) => {
        const updatedCart = [...state.cartItems, action.payload];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        state.cartItems = updatedCart;
        state.cartCount = updatedCart.length;
        state.cartLoading = false;
        state.message = "Added to cart";
      })
      .addCase(addToCartAction.pending, (state, action) => {
        state.cartLoading = true;
      })
      .addCase(addToCartAction.rejected, (state, action) => {
        state.cartLoading = false;
      })
      .addCase(removeFromCartAction.fulfilled, (state, action) => {
        let updatedCart = [...state.cartItems];
        const newCart = updatedCart.filter((cartItem) => {
          return cartItem._id !== `${action.payload.data._id}`;
        });
        state.cartItems = newCart;
        localStorage.setItem("cart", JSON.stringify(newCart));
        state.cartLoading = false;
        state.cartCount = newCart.length;
        state.message = "Removed from cart";
      })
      .addCase(removeFromCartAction.pending, (state, action) => {
        state.cartLoading = true;
      })
      .addCase(removeFromCartAction.rejected, (state, action) => {
        state.cartLoading = false;
      });
  },
});
export const { reset } = cartSlice.actions;
export default cartSlice.reducer;
