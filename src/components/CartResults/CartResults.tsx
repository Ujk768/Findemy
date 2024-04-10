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
    const user = localStorage.getItem("user");
    const userObj: User = user ? JSON.parse(user) : "";

    const handleRemoveCart = async (course: ICourseDetails) => {
      if (user) {
        let data = {
          id: userObj ? userObj?.id : "",
          course_id: course._id,
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
                <Col>
                  <img src={props.cartData.thumbnail} width={250} />
                </Col>
                <Col>
                  <Row>{props.cartData.title}</Row>
                  <Row>{props.cartData.author}</Row>
                  <Row>
                    <Col>{props.cartData.rating}</Col>
                    <Col>
                      <Rating
                        name="half-rating"
                        defaultValue={props.cartData.rating}
                        precision={0.5}
                        readOnly
                      />
                    </Col>
                  </Row>
                  <Row>{props.cartData.level}</Row>
                </Col>
                <Col>
                  <Row>₹{props.cartData.originalPrice}</Row>
                  <div
                    className="border border-dark addToCart"
                    onClick={() => handleRemoveCart(props.cartData)}
                  >
                    Remove
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col lg={2}>
            <Row>Total:</Row>
            <Row>price</Row>
            <Row>
              <Link to="/checkout">
                <div className="checkOutBtn">Check out</div>
              </Link>
            </Row>
          </Col>
        </Row>
        <hr></hr>
      </Container>
    );
  }
