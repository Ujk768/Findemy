import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CardEle from "../CardEle/CardEle";
import Carousel from "react-grid-carousel";
import "./Body.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ICourseDetails } from "../../utils/interface";
import { Link } from "react-router-dom";



function Body() {

  const [courses,setCourses]= useState<ICourseDetails[]>([])
    useEffect(() => {
    
    axios.get('http://localhost:5000/courses/getcourses')
                .then((response)=>{
                  console.log(response.data)
                  setCourses(response.data)})
  
    
  }, [])
  

  return (
    <div>
      <h4 className="first-title">Students are viewing</h4>

      <Carousel cols={4} rows={1}  >
        {courses?.map((c:ICourseDetails)=>(
          
           <Carousel.Item>
           <CardEle
                 courses={c}
               />
           </Carousel.Item>
        ))}
       
       
      </Carousel>

      <div className="mainFooter1">
        <Container>
          <h3 className="main-heading">Featured topics by category</h3>
          <Row>
            <Col xs={6} sm={6} md={3}>
              <Row className="heading">Development</Row>
              <Row className="coloured">
                <Link to="http://localhost:3000/search?query=python">Python</Link>
              </Row>
              <Row className="students">36,354,994 students</Row>
              <Row className="coloured">
                <Link to="http://localhost:3000/search?query=web%20dev">Web Dev</Link>
              </Row>
              <Row className="students">11,415,615 students</Row>
              <Row className="coloured">
                <Link to="http://localhost:3000/search?query=machine%20learning">ML</Link>
              </Row>
              <Row className="students">7,070,015 students</Row>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <Row className="heading">Business</Row>
              <Row className="coloured">
                <a>Financial Analysis</a>
              </Row>
              <Row className="students">1,195,282 students</Row>
              <Row className="coloured">
                <a>SQL</a>
              </Row>
              <Row className="students">5,977,561 students</Row>
              <Row className="coloured">
                <a>PMP</a>
              </Row>
              <Row className="students">1,733,398 students</Row>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <Row className="heading">IT and Software</Row>
              <Row className="coloured">
                <a>AWS Certifications</a>
              </Row>
              <Row className="students">6,078,244 students</Row>
              <Row className="coloured">
                <a>Ethical Hacking</a>
              </Row>
              <Row className="students">7,070,015 students</Row>
              <Row className="coloured">
                <a>Cyber Security</a>
              </Row>
              <Row className="students">3,998,037 students</Row>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <Row className="heading">Design</Row>
              <Row className="coloured">
                <a>Photoshop</a>
              </Row>
              <Row className="students">10,909,736 students</Row>
              <Row className="coloured">
                <a>Graphic Design</a>
              </Row>
              <Row className="students">69 students</Row>
              <Row className="coloured">
                <a>Drawing</a>
              </Row>
              <Row className="students">2,410,849 students</Row>
            </Col>
          </Row>
          <button className="exploreBtn">Explore more topics</button>
        </Container>
      </div>
      <div className="second-footer">
        <Container>
          <div className="text" >
            <h2 style={{textAlign:"center"}}>Trusted by over 13,400 great teams</h2>
            <p style={{textAlign:"center"}}>
              Leading companies use the same courses to help employees keep
              their skills fresh.
            </p>
          </div>
          <Row className="logos">
            <Col xs={6} sm={4} md={4} lg={1}>
              <img
                src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
                alt="Nasdaq"
              ></img>
            </Col>

            <Col xs={6} sm={4} md={4} lg={1}>
              <img
                src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg"
                alt="NetApp"
              ></img>
            </Col>

            <Col xs={6} sm={4} md={4} lg={1}>
              <img
                src="	https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
                alt="VolksWagen"
              ></img>
            </Col>

            <Col xs={6} sm={4} md={4} lg={1}>
              <img
                src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
                alt="eventbrite"
              ></img>
            </Col>
            <Col xs={6} sm={4} md={4} lg={1}>
              <img
                src="	https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
                alt="box-logo"
              ></img>
            </Col>
            <Col xs={6} sm={4} md={4} lg={1}>
              <img
                src="https://s.udemycdn.com/partner-logos/v4/tcs-dark.svg"
                alt="tcs-logo"
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Body;
