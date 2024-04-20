import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ICourseDetails } from "../../utils/interface";
import Rating from "@mui/material/Rating";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { removeFromCartAction } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import "./CartResults.css";
import { IAPiOutput, User } from "../../features/auth/authType";
type CardResults = {
  cartData: ICourseDetails;
};

export default function CartResults(props: CardResults) {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.cart);
  const user = localStorage.getItem("user");
  const userObj: User = user ? JSON.parse(user) : "";

  const handleRemoveCart = async (courseId: string) => {
    if (user) {
      let data = {
        id: userObj ? userObj?.id : "",
        course_id: courseId,
      };

      dispatch(removeFromCartAction(data));
    }
  };
  return (
    <Container fluid>
      <Row>
        <Col lg={2}></Col>
        <Col>
          <Container>
            <Row>
              <Row>
                <Col className="course-img">
                  <img src={props.cartData.thumbnail} width={250} />
                </Col>
              </Row>

              <Col className="course-title">
                <Row className="bold"> {props.cartData.title}</Row>
                <Row>{props.cartData.author}</Row>
                <Row>
                  <div className="rating">
                    {props.cartData.rating}
                    <Rating
                      name="half-rating"
                      defaultValue={props.cartData.rating}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </Row>
                <Row>{props.cartData.level}</Row>
              </Col>
              <Col className="price-sec">
                <Container>
                  <Row className="original bold">
                    ₹ {props.cartData.discountedPrice}
                  </Row>
                  <Row className="discount ">
                    ₹ {props.cartData.originalPrice}
                  </Row>
                  <Row
                    className="remove-btn"
                    onClick={() => handleRemoveCart(props.cartData._id)}
                  >
                    Remove
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <hr></hr>
    </Container>
  );
}
