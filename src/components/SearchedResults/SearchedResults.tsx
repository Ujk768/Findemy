import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ICourseDetails } from "../../utils/interface";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { useDispatch } from "react-redux";
import './SearchedResults.css'
import BestSeller from "../BestSeller/BestSeller";
// import { addToCart } from "../../redux/reducers/CartReducer";
// import { useAppSelector } from "../../redux/store/store";
import {  toast } from 'react-toastify';
import axios from "axios";
type SearchResults = {
  searchData: ICourseDetails;
};

export default function SearchedResults(props: SearchResults) {
    let bestSeller;
    if(props.searchData.isBestSeller){
        bestSeller=<BestSeller/>
    }
    const dispatch = useDispatch()
   // const user = useAppSelector(state=>state.LoginDataReducer)
    const  handleAddToCart= async (course)=>{
      // let data={
      //   id: user.loginDetails._id,
      //   course_id:course._id,
      // }
      
      // const response =await axios.post("http://localhost:5000/users/addtocart",data)
      // console.log(response)
      // toast(`${response.data.message}`,{type:"success"})
      // dispatch(addToCart(response.data.data.course))
    }
  return (
    <>
     <Container className="mainContainer" key={props.searchData._id}>
      <Row>
        <Col lg={4} className="">
          {" "}
          <Link to={`/coursedetails/${props.searchData._id}`} > <img width={200} src={props.searchData.thumbnail} /></Link>
         
        </Col>
        <Col lg={7} className="">
          <Row>
            <h5>{props.searchData.title}</h5>
          </Row>
          <Row>{props.searchData.description}</Row>
          <Row>{props.searchData.author}</Row>
          <Row>
            <Col>

              <Row>
                <span>
                <span className="rating"> {props.searchData.rating}</span>
                
                <Rating  name="half-rating" defaultValue={props.searchData.rating} precision={0.5}  readOnly/>
                </span>
               </Row>
                {bestSeller}
            </Col>
            <Col>
              <Button className="w-100 rounded-0 cartButton" onClick={()=>handleAddToCart(props.searchData)}>
                Add to cart
              </Button>
            </Col>
          </Row>
        </Col>
        <Col lg={1}>
          <Row className="original">₹ {props.searchData.originalPrice}</Row>
          <Row className="discount">₹ {props.searchData.discountedPrice}</Row>
        </Col>
      </Row>
      
    </Container>
    <hr color="black"/>
    </>
   
  );
}
