import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import CartResults from "../../components/CartResults/CartResults";
import Footer from "../../components/Footer/Footer";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ICourseDetails } from "../../utils/interface";
import { ICartType } from "../../features/cart/cartType";
import { User } from "../../features/auth/authType";
import { createCartService } from "../../features/cart/cartService";
import { getCartDetails } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { isLogin } = useAppSelector((state) => state.auth);
  const { cartItems } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();
  if (!isLogin) {
    navigate("/");
  }

  return (
    <>
      <Header />
      {isLogin && (
        <>
          {cartItems?.map((cartinfo: ICartType) => (
            <CartResults
              key={cartinfo._id}
              cartData={cartinfo as ICourseDetails}
            />
          ))}
          {cartItems.length == 0 ? <div>
            Cart is Empty

          </div> : ""}
        </>
      )}
      <Footer />
    </>
  );
}
