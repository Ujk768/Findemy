import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import CartResults from "../../components/CartResults/CartResults";
import Footer from "../../components/Footer/Footer";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ICourseDetails } from "../../utils/interface";
import { ICartType } from "../../features/cart/cartType";
import { User } from "../../features/auth/authType";
import { getCartDetails } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";
import { Col, Container, Row } from "react-bootstrap";
import { BASE_URL } from "../../utils/interface";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

export default function CartPage() {
  const { isLogin } = useAppSelector((state) => state.auth);
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const userObj: User = user ? JSON.parse(user) : "";

  const [checkoutValue, setCheckoutValue] = useState(0);

  const getTotalCheckout = () => {
    let total = 0;
    if (cartItems) {
      total = cartItems.reduce((acc, item) => acc + item.discountedPrice, 0);
    }
    return total.toFixed(2) ? Math.round(Number(total.toFixed(2))) : total;
  };

  useEffect(() => {
    setCheckoutValue(getTotalCheckout());
  }, [cartItems]);

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate, cartItems]);

  useEffect(() => {
    if (isLogin && user) {
      dispatch(getCartDetails(userObj.id));
    }
  }, [isLogin]);

  const handlePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51PFwib07fHGmhcVAyAtcvYqI4hwii1BC7s4oHZahW4BX05SEBCdfMJzNtbQVB6IgAfSpMqSGiZHBQDLOaRQLK7oC00KkaffD7O"
    );
    const response = await axios.post(
      `${BASE_URL}/stripe/create-checkout-session`,
      cartItems
    );
    const result = stripe?.redirectToCheckout({
      sessionId: response.data.id,
    });
  };

  return (
    <>
      <Header />
      <Container className="cartPage">
        <Row>
          <Col lg={10}>
            {isLogin && (
              <div>
                {cartItems.length > 0 ? (
                  <h4 className="title">Your Cart Details: </h4>
                ) : (
                  ""
                )}
                {cartItems?.map((cartinfo: ICartType) => (
                  <CartResults
                    key={cartinfo._id}
                    cartData={cartinfo as ICourseDetails}
                  />
                ))}
                {cartItems.length === 0 && (
                  <div className="cart-empty">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
                      alt="cart-empty"
                    />
                    <div>Cart is Empty</div>
                  </div>
                )}
              </div>
            )}
          </Col>
          <Col lg={2}>
            {cartItems.length > 0 ? (
              <div className="checkoutMobile">
                <h5 className="bold">Checkout</h5>
                <div className="bold"> ₹ {checkoutValue}</div>
                <div onClick={() => handlePayment()} className="remove-btn">
                  Proceed to checkout
                </div>
              </div>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
