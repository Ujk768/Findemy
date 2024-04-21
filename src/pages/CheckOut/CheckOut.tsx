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
import { useAppSelector } from "../../store/store";

export default function Checkout() {
  const { cartItems } = useAppSelector((state) => state.cart);
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
      <div className="check-out row">
        <div className="check-out-left col-8">
          <div className="row content-row ">
            <div className="check-out-content col-8 ">
              <div className="check-out-title">
                <h1 className="checkout-head">Checkout</h1>
              </div>
              <div className="billing-div">
                <div className="billing-title">
                  <h2 className="billing-text"> Billing address</h2>
                </div>
                <div className="row billing-address-div">
                  <div className="billing-address col-6">
                    <p>Country</p>
                    <div>
                      <Dropdown />
                    </div>
                  </div>
                  <div className="billing-address col-6 ">
                    <p> States </p>

                    <div>
                      <Drop />
                    </div>
                  </div>

                  <p className="normal-text">
                    Udemy is required by law to collect applicable transaction
                    taxes for purchases made in certain tax jurisdictions.
                  </p>
                </div>
              </div>
              <div className="Payment-methods">
                <div className="payment-title ">
                  <h2 className="paymenttext">Payment method</h2>
                  <div className="lock-payment">
                    <LockIcon />
                  </div>
                </div>
                <div>
                  <CustomAccordions />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="check-out-right col-4">
          <div className="row  checkout-right-side-content-main-row">
            <div className="col-7 ">
              <div className="row">
                <div className="col-12 summary-text-col">Summary</div>
              </div>

              <div className="row total-text-row">
                <div className="col-8 total-text-col">Total:</div>
                <div className="col-3 total-rupee-col ">
                  <span> &#x20B9;{checkoutValue}</span>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-12 by-completing-text-col">
                  By completing your purchase you agree to these
                  <a href="#">Terms of Service.</a>
                </div>
              </div>
              <div className="row">
                <div className="col-12 proceed-button-col">
                  <Link to="/success">
                    <button type="button" className="proceed-button">
                      Proceed
                    </button>
                  </Link>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12 thirty-day-text-col">
                  30-Day Money-Back Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          
    </>
  );
}
