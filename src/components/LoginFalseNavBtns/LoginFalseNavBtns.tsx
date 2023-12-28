import React from "react";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { Link } from "react-router-dom";
export default function LoginFalseNavBtns() {
  return (
    <>
      <div className="d-flex ">
        <Link to="/login">
          {" "}
          <button className="loginDesk me-2">Login</button>
        </Link>
        <Link to="/signup">
          {" "}
          <button className="signUpDesk me-2">Sign up</button>
        </Link>

        <button className="languageDesk ">
          <LanguageOutlinedIcon />
        </button>
      </div>
    </>
  );
}
