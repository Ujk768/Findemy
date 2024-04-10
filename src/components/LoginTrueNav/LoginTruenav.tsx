import React from "react";
import Button from "react-bootstrap/Button";
import { useAppDispatch, useAppSelector } from "../../store/store";
import "../LoginTrueNav/LoginTruenav.css";
import { Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { generateIntials } from "../../features/utils";

export default function LoginTrueNav() {
  const dispatch = useAppDispatch();
  const { isLogin } = useAppSelector((state) => state.auth);

  type User = {
    name: string;
    email: string;
    id: string;
  };
  const userObj = isLogin && (localStorage.getItem("user") as unknown as User);
  return (
    <div>
      <div className="loginTrueFirstpart">
        <div className="user-btn">
          {generateIntials()}
        </div>
        <div>
          <div className="text1">Hi {userObj ? userObj.name : ""}</div>
          <div className="text2">Welcome back</div>
        </div>
      </div>
        <div className="text3">
          <div className="logBtn">My Learning</div>
        </div>
        <div>
          <div className="logBtn">
            {" "}
            <Link to="/cart">My cart</Link>
          </div>
          <div className="logBtn" onClick={() => dispatch(logout())}>
            Log out
          </div>
        </div>
      </div>
  );
}
