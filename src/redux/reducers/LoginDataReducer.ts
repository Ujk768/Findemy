import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { ICourseDetails, IUserDetails } from '../../utils/interface'

type LoginData ={
    loginDetails : IUserDetails
}

const initialState :LoginData ={
    loginDetails:{
        _id: " ",
        name: " ",
        email: " ",
        password: "",
        cartItems: [],
        enrolledCourses: [],

    }
}

export const loginDetailSlice = createSlice({
    name:"loginDetails",
    initialState,
    reducers:{
        loggedInData: (store,action: PayloadAction<IUserDetails>)=>{
            store.loginDetails = action.payload
            return store
        }
    }
})

export const {loggedInData} = loginDetailSlice.actions
export default loginDetailSlice.reducer