import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import { ICourseDetails } from "../../utils/interface";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
// import { useAppSelector } from "../../redux/store/store";
import {toast} from 'react-toastify';
// import { removeFromCart, setCart } from "../../redux/reducers/CartReducer";
import axios from "axios"
import { Link } from "react-router-dom";
import './CartResults.css'
type CardResults = {
  cartData: ICourseDetails;
};

export default function CartResults(props: CardResults) {
  const dispatch = useDispatch()
//   const user = useAppSelector(state=>state.LoginDataReducer)

  const handleRemoveCart = async(course : ICourseDetails)=>{
    //   console.log("id:" , user.loginDetails._id)
    //   console.log("course_id:" , course._id)
    // let data={
    //   id: user.loginDetails._id,
    //   course_id:course._id,
    // }
    
    // const response =await axios.post("http://localhost:5000/users/removefromcart",data)
    //   console.log(response.data.data)
    //   dispatch(removeFromCart(response.data.data))
    //   toast('Removed from cart',{type:"success"})

  }
  return (
    <Container fluid >
      <Row>
        <Col lg={2}></Col>
        <Col >
          <Container>
            <Row >
              <Col >
                <img src={props.cartData.thumbnail} width={250} />
              </Col>
              <Col >
              <Row>{props.cartData.title}</Row>
              <Row>{props.cartData.author}</Row>
              <Row>
                <Col>{props.cartData.rating}</Col>
                <Col>
                <Rating  name="half-rating" defaultValue={props.cartData.rating} precision={0.5}  readOnly/>
                </Col>
              </Row>
              <Row>{props.cartData.level}</Row>
              </Col>
              <Col >
              <Row>₹{props.cartData.originalPrice}</Row>
              <div className="border border-dark addToCart" onClick={()=>handleRemoveCart(props.cartData)}>Remove</div></Col>
            </Row>
          </Container>
        </Col>
        <Col lg={2}>
          <Row>Total:</Row>
          <Row>price</Row>
          <Row><Link to="/checkout"><div className="checkOutBtn" >Check out</div></Link></Row>
        </Col>
      </Row>
      <hr></hr>
    </Container>
  );
}
