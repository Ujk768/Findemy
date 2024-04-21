import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img src="https://media0.giphy.com/media/ePaw7nwYmSI1t389Sy/giphy.gif"></img>
      </div>
      <div className="d-flex justify-content-center">
        <div className="remove-btn" onClick={() => navigate("/")}>
          {" "}
          Go to Home Page
        </div>
      </div>
    </div>
  );
}
