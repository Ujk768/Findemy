import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAuthService } from "./authService";
import { ILoginUserData, IRegisterUserData } from "./authType";

const user = localStorage.getItem("user");

const { registerUser, loginUser, logOutUser } = createAuthService();

const initialState = {
  isLogin: user ? true : false,
  isRegister: false,
  message: "",
  isLoading: false,
  isError: false,
};

export const register = createAsyncThunk(
  "users/register",
  async (user: IRegisterUserData, thunkAPI) => {
    try {
      console.log("inisde registed action");
      const response = await registerUser(user);
      return await response;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Register Error";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (user: ILoginUserData, thunkAPI) => {
    try {
      const response = await loginUser(user);
      return await response;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Login Error";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("user/logout", async () => {
  await logOutUser();
});

export const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {
      state.isRegister = false;
      state.isLogin = user ? true : false;
      state.message = "";
      state.isError = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        console.log("inside register fullfilled");
        state.isLoading = false;
        state.isRegister = true;
        state.isError = false;
        state.message = "Register Success";
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isRegister = false;
        state.isError = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload as string;
        state.isError = true;
        state.isRegister = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLogin = true;
        state.isLoading = false;
        state.message = "Login Success";
        state.isError = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLogin = false;
        state.isLoading = false;
        state.message = action.payload as string;
        state.isError = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLogin = false;
        state.isLoading = false;
        state.message = "Logout";
        state.isError = false;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
