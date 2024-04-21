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
import { CheckoutContext } from "../../context/checkoutContext";

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
    return total.toFixed(2) ? Number(total.toFixed(2)) : total;
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

  return (
      <>
        <Header />
        <Container>
          <Row>
            <Col lg={10}>
              {isLogin && (
                <div className="cart-empty">
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
                    <div className="cart-empty">Cart is Empty</div>
                  )}
                </div>
              )}
            </Col>
            <Col lg={2} className="cart-empty">
              {cartItems.length > 0 ? (
                <div>
                  <h5>Checkout</h5>
                  <div className="bold"> ₹ {checkoutValue}</div>
                  <div
                    onClick={() => navigate("/checkout")}
                    className="remove-btn"
                  >
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
