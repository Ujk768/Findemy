import "./Header.css";
import Container from "react-bootstrap/Container";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import Offcanvas from "react-bootstrap/Offcanvas";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LoginTrueNav from "../LoginTrueNav/LoginTruenav";
import LoginFalseNav from "../LoginFalseNav/LoginFalseNav";
import LoginTrueNavBtns from "../LoginTrueNavBtns/LoginTrueNavBtns";
import LoginFalseNavBtns from "../LoginFalseNavBtns/LoginFalseNavBtns";
import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useAppSelector } from "../../redux/store/store";
import { useState } from "react";

function Header() {
  const [searchMobile, setSearchMobile] = useState(false);
  let search;
  if (searchMobile) {
    search = (
      <div className="icons ">
        <div className="d-flex ">
          <SearchIcon />
          <input   
          className="border border-dark "
            placeholder="Search for anything"
            onKeyUp={(e) => handlePress(e)}
          />
        </div>
      </div>
    );
  }
  // let Login = useAppSelector((state) => state.LoginReducer);
  let element;
  let btns;

  // if (Login.isLogin) {
  //   element = <LoginTrueNav />;
  //   btns = <LoginTrueNavBtns />;
  // } else {
    element = <LoginFalseNav />;
    btns = <LoginFalseNavBtns />;
  // }

  const navigate = useNavigate();

  const handlePress = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      navigate(`/search?query=${e.target.value}`);
    }
  };

  return (
    <>
      <Navbar expand="md" className="mainNavbar">
        <Container fluid className="mainContainer">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Link to="/">
            {" "}
            <h1 className="main-title">Findemy</h1>
          </Link>

          <div className="icons">
            <div onClick={() => setSearchMobile(!searchMobile)}>
              <SearchIcon />
            </div>
           <Link to="/cart"><ShoppingCartOutlinedIcon style={{color:"black"}} className="cartIcon" /></Link> 
          </div>

          <Navbar.Offcanvas scroll="true" placement="start">
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <div className="content">
                  <div></div>
                  {element}
                </div>
              </Nav>

              <hr className="line" />

              <div className="content">
                <Nav className="navSubtitle"> Most popular</Nav>
                <Nav>
                  <button className="btnNav">
                    <span className="btnTitle"> Web Development </span>
                    <ChevronRightIcon className="rightIcon" />
                  </button>
                </Nav>
                <Nav>
                  <button className="btnNav">
                    <span className="btnTitle"> Mobile Development </span>
                    <ChevronRightIcon className="rightIcon" />
                  </button>
                </Nav>
                <Nav>
                  <button className="btnNav">
                    <span className="btnTitle"> Game Development </span>
                    <ChevronRightIcon className="rightIcon" />
                  </button>
                </Nav>
                <Nav>
                  <button className="btnNav">
                    <span className="btnTitle"> Enterpreneurship </span>
                    <ChevronRightIcon className="rightIcon" />
                  </button>
                </Nav>
                <Nav>
                  <button className="btnNav">
                    <span className="btnTitle">
                      {" "}
                      Business Analytics & Inteliigence{" "}
                    </span>
                    <ChevronRightIcon className="rightIcon" />
                  </button>
                </Nav>
                <Nav>
                  <button className="btnNav">
                    <span className="btnTitle"> Digital Marketing </span>
                    <ChevronRightIcon className="rightIcon" />
                  </button>
                </Nav>
                <Nav>
                  <button className="btnNav">
                    <span className="btnTitle">
                      Graphic Design & Illustration{" "}
                    </span>
                    <ChevronRightIcon className="rightIcon" />
                  </button>
                </Nav>
                <Nav>
                  <button className="btnNav">
                    <span className="btnTitle">IT Certifications </span>
                    <ChevronRightIcon className="rightIcon" />
                  </button>
                </Nav>
                <Nav>
                  <button className="btnNav">
                    <span className="btnTitle"> Personal Transformation </span>
                    <ChevronRightIcon className="rightIcon" />
                  </button>
                </Nav>
                <Nav>
                  <button className="btnNav">
                    <span className="btnTitle"> All categories </span>
                    <ChevronRightIcon className="rightIcon" />
                  </button>
                </Nav>
              </div>
              <hr className="line" />
              <div className="content">
                <Nav className="navSubtitle">More from Findemy</Nav>
                <Nav.Link>Findemy Business</Nav.Link>
                <Nav.Link>Get the app</Nav.Link>
                <Nav.Link>Invite friends</Nav.Link>
                <Nav.Link>Help</Nav.Link>
                <button className="languageBtn">
                  <LanguageOutlinedIcon />
                  <span>English</span>
                </button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="searchDesk">
            <div className="searchContainer">
              <SearchIcon />
              <input
                placeholder="Search for anything"
                onKeyUp={(e) => handlePress(e)}
              />
            </div>
          </div>
          <div className="allBtns">{btns}</div>
        </Container>
        {search}
      </Navbar>
    </>
  );
}
export default Header;
