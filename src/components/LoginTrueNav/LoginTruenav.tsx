import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/store/store";
import { loginFalse } from "../../redux/reducers/LoginReducer";
import "../LoginTrueNav/LoginTruenav.css";
import { Link } from "react-router-dom";

export default function LoginTrueNav() {
  let userData = useAppSelector(state=>state.LoginDataReducer)
  let dispatch = useDispatch()
  let name=userData.loginDetails.name
  const myArray= name.split(" ")
  const firstLetter = myArray[0].charAt(0)
  const lastLetter = myArray[1].charAt(0)
  return (
    <>
      <div className="loginTrueFirstpart">
        <Button variant="dark" className="rounded-circle">
          {firstLetter}{lastLetter}
        </Button>
        <div>
          <div className="text1">Hi {userData.loginDetails.name}</div>
          <div className="text2">Welcome back</div>
        </div>
      </div>

      <div className="text3">
        <div>Learn</div>
        <div className="logBtn">My Learning</div>
      </div>
      <div>
        <div className="logBtn"> <Link to="/cart">My cart</Link></div>
        <div className="logBtn" onClick={()=>dispatch(loginFalse())}>Log out</div>
      </div>
    </>
  );
}
