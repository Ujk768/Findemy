import "./Footer.css";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div>
      <div className="third-footer">
        <Container fluid>
          <Row>
            <Col className="d-flex footer">
              <div >
              <button className="languageBtn">
                <LanguageOutlinedIcon /> 
                English
              </button>
              </div>
              
            </Col>
          </Row>
          <Row style={{marginLeft:"1px"}} className="footer-contents">
            <Col sm={12} md={4}>
              <Row>Findemy Business</Row>
              <Row>Teach on Udemy</Row>
              <Row>Get the app</Row>
              <Row>About us</Row>
              <Row>Contact us</Row>
            </Col>
            <Col sm={12} md={4}>
              <Row>Careers</Row>
              <Row>Blog</Row>
              <Row>Help and Support</Row>
              <Row>Affiliate</Row>
              <Row>Investors</Row>
            </Col>
            <Col sm={12} md={4}>
              <Row>Terms</Row>
              <Row>Privacy policy</Row>
              <Row>Cookie settings</Row>
              <Row>Sitemap</Row>
              <Row>Accessibility statement</Row>
            </Col>
          </Row>

          <div className="last-part">
            <Row md={6} lg={6} className="last-heading">
              <Link to="/"> <h3 className="lower-heading">Findemy</h3></Link>
             
            </Row>
            <Row md={6} lg={6}>
              {" "}
              © 2023 Udemy, Inc.
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
