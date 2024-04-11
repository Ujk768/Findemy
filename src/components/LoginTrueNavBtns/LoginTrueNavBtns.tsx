import React, { useEffect, useState } from "react";
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
  const [profileClick, setProfileClick] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".user-btn")) {
        // Clicked outside the profile button, hide profile buttons
        setProfileClick(false);
      }
    }

    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
          <div className="user-btn" onClick={()=>setProfileClick(!profileClick)}>{generateIntials()}</div>
          <div className={`${profileClick ? "profile-btns":"profile-btns-hidden"}`} >
            <div>My learning</div>
            <hr style={{margin: 4}}/>
            <div>
              <Link to="/cart">My Cart</Link>
            </div>
            <hr style={{margin: 4}}/>
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
