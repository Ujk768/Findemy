import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import LoginReducer from "../reducers/LoginReducer";
import LoginDataReducer from "../reducers/LoginDataReducer";
import CartReducer from "../reducers/CartReducer";
export const store =configureStore({
    reducer:{
        LoginReducer,
        LoginDataReducer,
        CartReducer,
        
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: ()=> AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store