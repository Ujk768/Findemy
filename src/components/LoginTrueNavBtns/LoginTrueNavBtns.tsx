import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button, DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useAppDispatch } from "../../store/store";
import { Link } from "react-router-dom";

import "./LoginTrueNavBtns.css";
import { logout, reset } from "../../features/auth/authSlice";
import { generateIntials } from "../../features/utils";

export default function LoginTrueNavBtns() {
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
