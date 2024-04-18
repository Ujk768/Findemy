import React, { useEffect } from "react";
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
import "./CartPage.css";

export default function CartPage() {
  const { isLogin } = useAppSelector((state) => state.auth);
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const userObj: User = user ? JSON.parse(user) : "";

  // Effect hook to navigate when isLogin changes
  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate,cartItems]);

  // Fetch cart details when component mounts
  useEffect(() => {
    if (isLogin && user) {
      dispatch(getCartDetails(userObj.id));
    }
  }, [isLogin]);

  return (
    <>
      <Header />
      {isLogin && (
        <div className="cart-empty">
          {cartItems?.map((cartinfo: ICartType) => (
            <CartResults
              key={cartinfo._id}
              cartData={cartinfo as ICourseDetails}
            />
          ))}
          {cartItems.length === 0 && <div className="cart-empty">Cart is Empty</div>}
        </div>
      )}
      <Footer />
    </>
  );
}
