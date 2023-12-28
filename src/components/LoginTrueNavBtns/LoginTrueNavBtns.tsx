import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button, DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useAppSelector,useAppDispatch } from "../../redux/store/store";
import { loginFalse } from "../../redux/reducers/LoginReducer";
import { Link } from "react-router-dom";

import "./LoginTrueNavBtns.css";
export default function LoginTrueNavBtns() {
  let userData = useAppSelector(state=>state.LoginDataReducer)
  let name=userData.loginDetails.name
  const myArray= name.split(" ")
  const firstLetter = myArray[0].charAt(0)
  const lastLetter = myArray[1].charAt(0)
  let initials = firstLetter + lastLetter
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="d-flex loginBtns">
        <div>My Learning</div>
        <div>
          {" "}
          <Link to="/cart"><ShoppingCartOutlinedIcon style={{color:"black"}} /></Link>
        </div>
        <NotificationsActiveIcon className="notifBtn me-2" />
        <div className="navBarBtn">
          <DropdownButton title={initials} drop="start">
            <Dropdown.Item >My learning</Dropdown.Item>
            <Dropdown.Item ><div>
            <Link to="/cart">My Cart</Link>
              </div></Dropdown.Item>
            <Dropdown.Item > <div onClick={()=>dispatch(loginFalse())}>Log out</div></Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </>
  );
}
