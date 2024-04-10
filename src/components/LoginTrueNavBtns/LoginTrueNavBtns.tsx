import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button, DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useAppDispatch } from "../../store/store";
import { Link } from "react-router-dom";

import "./LoginTrueNavBtns.css";
import { logout, reset } from "../../features/auth/authSlice";
import { reset as resetCart } from "../../features/cart/cartSlice";
import { generateIntials } from "../../features/utils";

export default function LoginTrueNavBtns() {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="loginBtns">
        <div>My Learning</div>
        <div>
          {" "}
          <Link to="/cart">
            <ShoppingCartOutlinedIcon style={{ color: "black" }} />
          </Link>
        </div>
        <NotificationsActiveIcon className="notifBtn me-2" />
        <div className="navBarBtn">
          <div className="user-btn">{generateIntials()}</div>
          <div>
            <div>My learning</div>
            <div>
              <Link to="/cart">My Cart</Link>
            </div>{" "}
            <div
              onClick={() => {
                dispatch(logout());
                dispatch(reset());
                dispatch(resetCart());
              }}
            >
              Log out
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
