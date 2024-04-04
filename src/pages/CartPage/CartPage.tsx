import React, { useEffect, useState } from 'react'
import axios from "axios"
import Header from '../../components/Header/Header'
// import { useAppDispatch, useAppSelector } from '../../redux/store/store'
// import CartResults from '../../components/CartResults/CartResults'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
// import { addToCart, setCart } from '../../redux/reducers/CartReducer'
export default function CartPage() {

  // let user = useAppSelector(state=>state.LoginDataReducer)
  // let cart = useAppSelector(state=>state.CartReducer)
  // const navigate = useNavigate()
  // const dispatch = useAppDispatch()



//   useEffect(()=>{
//     if(user.loginDetails._id){
//       axios.get(`http://localhost:5000/users/getcart/${user.loginDetails._id}`)
//       .then((response)=>{
//         console.log(response.data.data)
//         dispatch(setCart(response.data.data))
//       })
//     }
//   },[user])
// let cartEmpty
//   if(cart.cart.length == 0){
//     cartEmpty=<div>Cart is empty</div>
//   }
 
 
  return (
    <>
    <Header/>
    {/* {cartEmpty}
     {cart.cart?.map((cartinfo)=><CartResults cartData={cartinfo} />)} 
     <Footer/> */}
    </>
   
  )
}
