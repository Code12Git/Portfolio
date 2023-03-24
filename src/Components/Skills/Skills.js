import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";

import html from "../assets/img/html.png";
import mongodb from "../assets/img/mongodb.png";
import Javascript from "../assets/img/javascript.png";
import nodejs from "../assets/img/nodejs.png";
import react from "../assets/img/reactjs.png";
import css from "../assets/img/css.png";
import colorSharp from "../assets/img/color-sharp.png";
import "./Skills.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__bounce" : ""
                    }
                  >
                    <h2>Skills</h2>
                    <p>
                      Experience in full-stack development technologies like
                      HTML,CSS,JAVASCRIPT,REACT,NODEJS,MONGODB.
                    </p>
                  </div>
                )}
              </TrackVisibility>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={html} alt="image" />
                  <h5>Html</h5>
                </div>
                <div className="item">
                  <img src={css} alt="image" />
                  <h5>Css</h5>
                </div>
                <div className="item">
                  <img src={Javascript} alt="image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img style={{ height: "160px" }} src={react} alt="image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="image" />
                  <h5>NodeJs</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="image" />
                  <h5>MongoDB</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
}

export default Skills;
