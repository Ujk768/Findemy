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
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/interface";
import { ICourseDetails } from "../../utils/interface";
import video from "../../videos/video.mp4";
import BestSeller from "../../components/BestSeller/BestSeller";
import { useAppDispatch } from "../../store/store";
import { IAPiOutput } from "../../features/auth/authType";
import { addToCartAction } from "../../features/cart/cartSlice";
import { loadStripe } from "@stripe/stripe-js";

export default function CourseDetails() {
  const [move, setmove] = useState(false);
  const { id } = useParams();
  const [course, setCourse] = useState<ICourseDetails>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const userObj = user ? (JSON.parse(user) as IAPiOutput) : null;

  const handleAddToCart = async (courseID) => {
    if (user) {
      let data = {
        id: userObj ? userObj.id : "",
        course_id: courseID as string,
      };
      dispatch(addToCartAction(data));
    } else {
      navigate("/login");
    }
  };

  const handlePayment = async () => {
    if (course) {
      const courseDetails: ICourseDetails[] = [];
      courseDetails.push(course);
      console.log("courseDetials", courseDetails);
      const stripe = await loadStripe(
        "pk_test_51PFwib07fHGmhcVAyAtcvYqI4hwii1BC7s4oHZahW4BX05SEBCdfMJzNtbQVB6IgAfSpMqSGiZHBQDLOaRQLK7oC00KkaffD7O"
      );
      const response = await axios.post(
        `${BASE_URL}/stripe/create-checkout-session`,
        courseDetails
      );
      const result = stripe?.redirectToCheckout({
        sessionId: response.data.id,
      });
    }
  };

  useEffect(() => {
    axios.get(`${BASE_URL}/courses/getcourse/${id}`).then((response) => {
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
  if (course?.isBestSeller) {
    bestSeller = <BestSeller />;
  }
  return (
    <>
      <Header />

      <Container fluid className="course-strip ">
        <Row>{course?.title}</Row>
        <Row>
          <span>
            <span className="stars"> {course?.rating}</span>
            <span>({course?.numOfRatings})</span> 25,759 students
          </span>
        </Row>
      </Container>

      <Container fluid className="mainWrapper">
        <Row>
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
              <source src={video} />
            </video>
            <div className="d-flex">
              <h5 className="discount">₹{course?.originalPrice}</h5>
              <h2 className="pl-5">₹{course?.discountedPrice}</h2>
            </div>
            <div className="mb-2">
              <div
                className="cartBtn"
                onClick={() => handleAddToCart(course?._id)}
              >
                Add to cart
              </div>
            </div>

            <div>
              <div onClick={() => handlePayment()} className="buyNowBtn">
                Buy now
              </div>
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
        </Row>
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
        <Row>
          <Container className="hideDesktop video-desc">
            <video width={350} height={200} poster={course?.thumbnail} controls>
              <source src={video} />
            </video>
            <h2>₹{course?.originalPrice}</h2>
            <div className="mb-2">
              <div
                className="cartBtn"
                onClick={() => handleAddToCart(course?._id)}
              >
                Add to cart
              </div>
            </div>

            <div>
              <Button className="buyNowBtn">Buy now</Button>
            </div>
          </Container>
        </Row>
        <Row className="course-2">
          <Col lg={6}>
            <Row className="learn-box">
              <Container className="border border-dark">
                <Row>
                  <h4>What Youll learn</h4>
                </Row>
                <Row>
                  {course?.learningOutcomes.map((singlecourse, index) => (
                    <Col lg={6} key={`in-${index}`}>
                      {" "}
                      <DoneIcon />
                      {singlecourse}
                    </Col>
                  ))}
                </Row>
              </Container>
            </Row>
            <Row>
              <Container>
                <Row>
                  <h4>Requirements</h4>
                </Row>
                {course?.requirements}
              </Container>
            </Row>
            <Row>
              <Container>
                <Row>
                  <h4>Description</h4>
                </Row>
                <Row className="long-desc">{course?.longdescription}</Row>
              </Container>
              <Container>
                <Row>
                  <h4>Instructors</h4>
                </Row>
                <Row>
                  <h5 className="styled-2">{course?.author}</h5>
                </Row>

                <Container>
                  <Row className="instructor-desc">
                    <div className="col1">
                      <img
                        className="instructor-img"
                        src={course?.authorImage}
                      />
                    </div>
                    <div className="col2">
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
                  </Row>
                </Container>
                <Container className="author-desc">
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
