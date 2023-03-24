import { Col, Row, Container } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://in.linkedin.com/">
                <img src={navIcon1} />
              </a>
              <a href="https://www.facebook.com/">
                <img src={navIcon2} />
              </a>
              <a href="https://www.instagram.com/">
                <img src={navIcon3} />
              </a>
            </div>
            <p>CopyRight 2023.All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
