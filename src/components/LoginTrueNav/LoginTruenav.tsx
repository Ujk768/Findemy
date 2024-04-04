import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../store/store";
import "../LoginTrueNav/LoginTruenav.css";
import { Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

export default function LoginTrueNav() {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="loginTrueFirstpart">
        <Button variant="dark" className="rounded-circle">
          {/* {firstLetter}{lastLetter} */}
        </Button>
        <div>
          {/* <div className="text1">Hi {userData.loginDetails.name}</div> */}
          <div className="text2">Welcome back</div>
        </div>
      </div>

      <div className="text3">
        <div>Learn</div>
        <div className="logBtn">My Learning</div>
      </div>
      <div>
        <div className="logBtn"> <Link to="/cart">My cart</Link></div>
        <div className="logBtn" onClick={()=>dispatch(logout())}>Log out</div>
      </div>
    </>
  );
}
