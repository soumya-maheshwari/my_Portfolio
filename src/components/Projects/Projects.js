import Notes from "../../assets/projects/notes.png";
import ProjectCard from "./ProjectCard";
import Container from "react-bootstrap/Container";
import "./projects.css";
import { Row, Col } from "react-bootstrap";
import imgg from "../../assets/1.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <h1 className="project-heading">my recent projects</h1>
      <Row style={{ paddingBottom: 50, justifyContent: "center" }}>
        <Col md={3}>
          <ProjectCard
            imgPath={imgg}
            title="abcd"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium consequuntur labore vitae magnam non similique impedit cum reprehenderit unde provident libero, est laboriosam repudiandae illum blanditiis quam accusantium perferendis."
            ghLink=""
            demoLink=""
          />
        </Col>
        <Col md={3}>
          <ProjectCard
            imgPath={imgg}
            title="abcd"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium consequuntur labore vitae magnam non similique impedit cum reprehenderit unde provident libero, est laboriosam repudiandae illum blanditiis quam accusantium perferendis."
            ghLink=""
            demoLink=""
          />
        </Col>
        <Col md={3}>
          <ProjectCard
            imgPath={imgg}
            title="abcd"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium consequuntur labore vitae magnam non similique impedit cum reprehenderit unde provident libero, est laboriosam repudiandae illum blanditiis quam accusantium perferendis."
            ghLink=""
            demoLink=""
          />
        </Col>
        <Col md={3}>
          <ProjectCard
            imgPath={imgg}
            title="abcd"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium consequuntur labore vitae magnam non similique impedit cum reprehenderit unde provident libero, est laboriosam repudiandae illum blanditiis quam accusantium perferendis."
            ghLink=""
            demoLink=""
          />
        </Col>
        <Col md={3}>
          <ProjectCard
            imgPath={imgg}
            title="abcd"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium consequuntur labore vitae magnam non similique impedit cum reprehenderit unde provident libero, est laboriosam repudiandae illum blanditiis quam accusantium perferendis."
            ghLink=""
            demoLink=""
          />
        </Col>
        <Col md={3}>
          <ProjectCard
            imgPath={imgg}
            title="abcd"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium consequuntur labore vitae magnam non similique impedit cum reprehenderit unde provident libero, est laboriosam repudiandae illum blanditiis quam accusantium perferendis."
            ghLink=""
            demoLink=""
          />
        </Col>
        <Col md={3}>
          <ProjectCard
            imgPath={imgg}
            title="abcd"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium consequuntur labore vitae magnam non similique impedit cum reprehenderit unde provident libero, est laboriosam repudiandae illum blanditiis quam accusantium perferendis."
            ghLink=""
            demoLink=""
          />
        </Col>
        <Col md={3}>
          <ProjectCard
            imgPath={imgg}
            title="abcd"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium consequuntur labore vitae magnam non similique impedit cum reprehenderit unde provident libero, est laboriosam repudiandae illum blanditiis quam accusantium perferendis."
            ghLink=""
            demoLink=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
