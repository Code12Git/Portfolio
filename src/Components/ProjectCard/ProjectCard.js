import { Col } from "react-bootstrap";
import "./ProjectCard.css";
function ProjectCard({ title, description, imgUrl }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img style={{ width: "500px" }} src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
