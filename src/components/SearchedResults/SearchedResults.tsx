import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ICourseDetails } from "../../utils/interface";
import { Link, useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import "./SearchedResults.css";
import BestSeller from "../BestSeller/BestSeller";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { toast } from "react-toastify";
import axios from "axios";
import { IAPiOutput } from "../../features/auth/authType";
import { addToCartAction } from "../../features/cart/cartSlice";
type SearchResults = {
  searchData: ICourseDetails;
};

export default function SearchedResults(props: SearchResults) {
  let bestSeller;
  if (props.searchData.isBestSeller) {
    bestSeller = <BestSeller />;
  }

  const { isLogin } = useAppSelector((state) => state.auth);

  const { message } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const userObj = user ? (JSON.parse(user) as IAPiOutput) : null;

  const handleAddToCart = async (course) => {
    if (user) {
      let data = {
        id: userObj ? userObj.id : "",
        course_id: course._id as string,
      };
      dispatch(addToCartAction(data));
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <Container className="mainContainer" key={props.searchData._id}>
        <Row>
          <Col lg={4} className="">
            {" "}
            <Link to={`/coursedetails/${props.searchData._id}`}>
              {" "}
              <img width={300} height={200} src={props.searchData.thumbnail} />
            </Link>
          </Col>
          <Col lg={7} className="">
            <Row>
              <h5>{props.searchData.title}</h5>
            </Row>
            <Row>{props.searchData.description}</Row>
            <Row>{props.searchData.author}</Row>
            <Row>
              <div className="rating-wrapper">
                <span className="bold"> {props.searchData.rating}</span>
                <Rating
                  name="half-rating"
                  defaultValue={props.searchData.rating}
                  precision={0.5}
                  readOnly
                />
              </div>
            </Row>
            <Row className="best-seller">{bestSeller} </Row>
          </Col>
          <Col lg={1}>
            <Row className="original bold">
              ₹ {props.searchData.discountedPrice}
            </Row>
            <Row className="discount">₹ {props.searchData.originalPrice}</Row>
            <div
              className="w-100 rounded-0 remove-btn"
              onClick={() => handleAddToCart(props.searchData)}
            >
              Add to cart
            </div>
          </Col>
        </Row>
      </Container>
      <hr color="black" />
    </>
  );
}
