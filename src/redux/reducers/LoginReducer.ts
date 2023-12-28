import {createSlice} from '@reduxjs/toolkit'

type LoginState ={
    isLogin : boolean;
}

const initialState :LoginState ={
    isLogin : false
}

export const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        loginTrue : (store)=>{
                store.isLogin = true
                return store
        },
        loginFalse: (store)=>{
            store.isLogin =false
            return store
        }

    }
})

export const {loginTrue,loginFalse} = loginSlice.actions
export default loginSlice.reducer





