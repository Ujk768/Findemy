import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Dropdown from "../../components/DropDown/DropDown";
import "../CheckOut/CheckOut.css";
import CustomAccordions from "../../components/Accordion/CustomAccordion";
import Drop from "../../components/Drop/Drop";
import LockIcon from "@mui/icons-material/Lock";
import { NavLink, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CheckoutContext } from "../../context/checkoutContext";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Stripe, loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { getConfigWithToken } from "../../features/utils";
import { getCartDetails } from "../../features/cart/cartSlice";
import { User } from "../../features/auth/authType";
import CheckOutForm from "./CheckOutForm";

export default function Checkout() {
  const { isLogin } = useAppSelector((state) => state.auth);
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const user = localStorage.getItem("user");
  const userObj: User = user ? JSON.parse(user) : "";
  const [checkoutValue, setCheckoutValue] = useState(0);
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null>>();
  const [clientSecret, setClientSecret] = useState("");
  const getTotalCheckout = () => {
    let total = 0;
    if (cartItems) {
      total = cartItems.reduce((acc, item) => acc + item.discountedPrice, 0);
    }
    return total.toFixed(2) ? Math.round(Number(total.toFixed(2))) : total;
  };
  useEffect(() => {
    if (isLogin && user) {
      dispatch(getCartDetails(userObj.id));
    }
  }, [isLogin]);

  useEffect(() => {
    if (cartItems) {
      const value = getTotalCheckout();
      console.log("totalCheckoutValue", value);
      setCheckoutValue(value);
    }
  }, [cartItems]);

  const getPublishKey = async () => {
    try {
      const repsonse = await axios.get(
        "http://localhost:5000/stripe/config",
        getConfigWithToken()
      );
      if (repsonse) {
        setStripePromise(loadStripe(repsonse.data.publishableKey));
        console.log("loadStripe done");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (cartItems) getPublishKey();
  }, [cartItems]);

  const createPaymentIntent = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/stripe/create-payment-intent",
        data,
        getConfigWithToken()
      );

      console.log("createPaymentIntent", response);
      if (response.data.clientSecret) {
        setClientSecret(response.data.clientSecret);
      }
      console.log("response client secret", response.data.clientSecret);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    console.log("cehckoutValue");
    if (cartItems && checkoutValue && stripePromise) {
      createPaymentIntent({
        amount: Math.round(checkoutValue) * 100,
      });
    }
  }, [cartItems, checkoutValue]);

  return (
    <>
      <nav>
        <Container fluid className="checkout-navbar-main d-flex">
          <div className="checkout-nav-cancel-button-div">
            <button type="button" className="checkout-nav-cancel-button">
              <Link to="/">
                <span>Cancel</span>
              </Link>
            </button>
          </div>
        </Container>
      </nav>
      <div>
        {stripePromise && clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckOutForm checkoutValue = {checkoutValue}/>
          </Elements>
        )}
      </div>
          
    </>
  );
}
