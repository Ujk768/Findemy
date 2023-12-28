import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import DoneIcon from "@mui/icons-material/Done";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import MobileFriendlyOutlinedIcon from "@mui/icons-material/MobileFriendlyOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SystemUpdateAltOutlinedIcon from "@mui/icons-material/SystemUpdateAltOutlined";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import ClosedCaptionOffIcon from "@mui/icons-material/ClosedCaptionOff";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import "../CourseDetails/CourseDetails.css";
import LanguageOutlined from "@mui/icons-material/LanguageOutlined";
import { useParams } from "react-router-dom";
import axios from "axios";
import Rating from "@mui/material/Rating";
import { ICourseDetails } from "../../utils/interface";
import video from "../../videos/video.mp4"
import BestSeller from "../../components/BestSeller/BestSeller";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/store/store";
import {toast} from 'react-toastify';
import { addToCart } from "../../redux/reducers/CartReducer";
export default function CourseDetails() {
  const [move, setmove] = useState(false);
  const { id } = useParams();
  const [course, setCourse] = useState<ICourseDetails>();
  console.log(id);
  const dispatch = useDispatch()
  const user = useAppSelector(state=>state.LoginDataReducer)
  const  handleAddToCart= async (course)=>{
    let data={
      id: user.loginDetails._id,
      course_id:course._id,
    }
    
    const response =await axios.post("http://localhost:5000/users/addtocart",data)
    console.log(response)
    toast(`${response.data.message}`,{type:"success"})
    dispatch(addToCart(response.data.data.course))
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5000/courses/getcourse/${id}`)
      .then((response) => {
        console.log(response.data.title);
        setCourse(response.data);
      });
  }, []);

  window.onscroll = function () {
    if (window.scrollY > 350) {
      setmove(true);
    }
    if (window.scrollY < 350) {
      setmove(false);
    }
  };
  let bestSeller;
  if(course?.isBestSeller){
    bestSeller=<BestSeller/>
  }
  return (
    <>
      <Header />

      <Container fluid className="course-strip ">
        <Row>{course?.title}</Row>
        <Row>
          <span>
           <span className="stars"> {course?.rating}</span>
            <span >({course?.numOfRatings})</span> 25,759
            students
          </span>
         
        </Row>
      </Container>

      <Container fluid className="mainWrapper">
        <Container className={move ? "sideComponent2" : "sideComponent"}>
          <video 
          width={350}
          height={200}
          className={

              move
                ? "sideComponentImgAfterScroll"
                : "sideComponentImgBeforeScroll"
            }
            poster={course?.thumbnail}
            controls
            >
              <source src={video}/>
          </video>
          <h2>₹{course?.originalPrice}</h2>
          <div className="mb-2">
            <Button className="cartBtn" onClick={()=>handleAddToCart(course)} >Add to cart</Button>
          </div>

          <div>
            <Button className="buyNowBtn">Buy now</Button>
          </div>
          <div className="para">30-Day Money-Back Guarantee</div>
          <div>
            <h5>This course includes:</h5>
            <div className="listele">
              <div>
                <OndemandVideoIcon /> 14 hours on-demand video
              </div>
              <div>
                <DescriptionOutlinedIcon /> 1 article
              </div>
              <div>
                <SystemUpdateAltOutlinedIcon /> 3 downloadable resources
              </div>
              <div>
                <AllInclusiveOutlinedIcon /> Full lifetime access
              </div>
              <div>
                <MobileFriendlyOutlinedIcon /> Access on mobile and TV
              </div>
              <div>
                <EmojiEventsOutlinedIcon /> Certificate of completion
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between last-links p-3">
            <div>Share</div>
            <div>Gift this course</div>
            <div>Apply Coupon</div>
          </div>
        </Container>
        <Row className="course-1">
          <Col lg={6}>
            <Container fluid>
              <Row>
                <Col>
                  <h3 style={{ fontWeight: "700" }}>{course?.title}</h3>
                  <div style={{ fontWeight: "400" }}>{course?.description}</div>
                  <span className="stars">
                    {" "}
                    {course?.rating}{" "}
                    <span className="stars">
                      <StarIcon style={{ fontSize: "1rem" }} />
                      <StarIcon style={{ fontSize: "1rem" }} />
                      <StarIcon style={{ fontSize: "1rem" }} />{" "}
                      <StarIcon style={{ fontSize: "1rem" }} />{" "}
                      <StarHalfIcon style={{ fontSize: "1rem" }} />{" "}
                    </span>{" "}
                    <span className="styled spaced">
                      {course?.numOfRatings}
                    </span>
                  </span>
                  <span>25,759 students</span>
                </Col>
              </Row>
              <Row>
                <div>
                  Created by <span className="styled">{course?.author}</span>
                </div>
              </Row>
              <Row className="mb-2">
                <div className="d-flex">
                  <div className="spaced">
                    <NewReleasesIcon /> Last Updated 9/2015
                  </div>
                  <div className="spaced">
                    <LanguageOutlined />
                    English
                  </div>
                  <div className="spaced">
                    <ClosedCaptionOffIcon />
                    English
                  </div>
                </div>
              </Row>
            </Container>
          </Col>
          <Col lg={3}></Col>
        </Row>
        <Row className="course-2">
          <Col lg={6}>
            <Row>
              <Container className="border border-dark  m-2">
                <Row>
                  <h4>What Youll learn</h4>
                </Row>
                <Row>
                  {course?.learningOutcomes.map((singlecourse) => (
                    <Col lg={6}>
                      {" "}
                      <DoneIcon />
                      {singlecourse}
                    </Col>
                  ))}
                </Row>
              </Container>
            </Row>
            <Row>
              <Container className=" m-2 ">
                <Row>
                  <h4>Requirements</h4>
                </Row>
                {course?.requirements}
              </Container>
            </Row>
            <Row>
              <Container className="  m-2 ">
                <Row>
                  <h4>Description</h4>
                </Row>
                <Row>{course?.longdescription}</Row>
              </Container>
              <Container>
                <Row>
                  <h4>Instructors</h4>
                </Row>
                <Row>
                  <h5 className="styled-2">{course?.author}</h5>
                </Row>

                <Container className="instructor-section">
                  <Row>
                    <Col>
                      <img
                        className="instructor-img"
                        src={course?.authorImage}
                      />
                    </Col>
                    <Col>
                      <div style={{ textAlign: "left" }}>
                        <div>
                          <StarIcon style={{ fontSize: "1.5rem" }} />
                          {course?.rating} Instructor Rating
                        </div>
                        <div>
                          <WorkspacePremiumIcon />
                          77,116 Reviews
                        </div>
                        <div>
                          <PeopleAltIcon />
                          941,376 Students
                        </div>
                        <div>
                          <OndemandVideoIcon />
                          16 Courses
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>

                <Container className="mt-5">
                  <Row>{course?.authorDescription}</Row>
                </Container>
              </Container>
            </Row>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
