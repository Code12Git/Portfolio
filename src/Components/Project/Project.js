import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { TabContainer, TabContent, TabPane } from "react-bootstrap";
import ProjectCard from "../ProjectCard/ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "./Project.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
function Project() {
  const projects = [
    {
      title: "Blog App",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Netflix Clone",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Notes App",
      description: " Development",
      imgUrl: projImg3,
    },
    {
      title: "Shopmart",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Yt Shorts",
      description: " Development",
      imgUrl: projImg5,
    },
    {
      title: "Weather ",
      description: " Development",
      imgUrl: projImg6,
    },
    {
      title: "Amazon Clone",
      description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      title: "Contact list",
      description: " Development",
      imgUrl: projImg8,
    },
    {
      title: "Mern Blog",
      description: " Development",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                </div>
              )}
            </TrackVisibility>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                defaultActiveKey="/home"
              ></Nav>
              <TabContent>
                <TabPane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </TabPane>
                <TabPane eventKey="second"></TabPane>
                <TabPane eventKey="third"></TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}

export default Project;
