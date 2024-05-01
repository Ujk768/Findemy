import React from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import "./CheckOut.css";
export default function CheckOutForm(props) {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayClick = async () => {
    if (!stripe || !elements) {
      return;
    }
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });
    if (error) {
      console.log(error);
    }
  };
  return (
    <div className="check-out row">
      <div className="check-out-left col-8 cards-section">
        <div className="check-out-content col-8  ">
          <PaymentElement />
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
                <span> &#x20B9;{props.checkoutValue}</span>
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
                <button type="button" className="proceed-button" onClick={handlePayClick}>
                  Proceed
                </button>
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
  );
}
