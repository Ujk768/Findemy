import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button, DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { Link } from "react-router-dom";

import "./LoginTrueNavBtns.css";
import { logout, reset } from "../../features/auth/authSlice";
type User = {
  name: string;
  email: string;
  id: string;
};

export default function LoginTrueNavBtns() {
  const { isLogin } = useAppSelector((state) => state.auth);
  const user = localStorage.getItem("user");
  const userObj : User = JSON.parse(user ? user : "");
  const generateIntials = () => {
    if (user && isLogin) {
      let name = userObj?.name;
      const myArray = name.split(" ");
      const firstLetter = myArray[0]?.charAt(0);
      const lastLetter = myArray[1]?.charAt(0);
      let initial = "";
      if (firstLetter) {
        initial = initial + firstLetter;
      }
      if (lastLetter) {
        initial = initial + " " + lastLetter;
      }
      return initial;
    }
  };
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="d-flex loginBtns">
        <div>My Learning</div>
        <div>
          {" "}
          <Link to="/cart">
            <ShoppingCartOutlinedIcon style={{ color: "black" }} />
          </Link>
        </div>
        <NotificationsActiveIcon className="notifBtn me-2" />
        <div className="navBarBtn">
          <DropdownButton title={generateIntials()} drop="start">
            <Dropdown.Item>My learning</Dropdown.Item>
            <Dropdown.Item>
              <div>
                <Link to="/cart">My Cart</Link>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              {" "}
              <div
                onClick={() => {
                  dispatch(logout());
                  dispatch(reset());
                }}
              >
                Log out
              </div>
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </>
  );
}
