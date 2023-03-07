import ProjectCard from "./ProjectCard";
import Container from "react-bootstrap/Container";
import "./projects.css";
import { Row, Col } from "react-bootstrap";
import imgg from "../../assets/1.jpg";
import notes from "../../assets/projects/notes.png";
import Register from "../../assets/projects/RegsiterC++.png";
import emoji from "../../assets/projects/emoji.png";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">My recent projects</h1>
        <Row style={{ paddingBottom: "10px", justifyContent: "center" }}>
          <Col md={3} className="project-card">
            <ProjectCard
              className="card"
              imgPath={notes}
              title=" Notes App"
              description=" 
            Beautiful notes app built with React and Material UI .It lets you Create and Delete Notes in a fluid interface.Manage your work, home, personal tasks with notes app"
              ghLink="https://github.com/soumya-maheshwari/notesApp"
              demoLink=""
            />
          </Col>
          <Col md={3} className="project-card">
            <ProjectCard
              className="card"
              imgPath={Register}
              title="LOGIN AND REGISTRATION SYSTEM"
              description="

              This is a Login and Regisration System, implemented using c++.
            
             A User can Register or Login. They can recover their password by answering a question set during registration."
              ghLink="https://github.com/soumya-maheshwari/LoginAndRegister"
              demoLink=""
            />
          </Col>
          <Col md={3} className="project-card">
            <ProjectCard
              className="card"
              imgPath={emoji}
              title="Emoji"
              description="This is a simple app built with React .Click on the button and get more emojis"
              ghLink="https://github.com/soumya-maheshwari/EMOJIIIII"
              demoLink=""
            />
          </Col>
          {/* <Col md={3} className="project-card">
             <ProjectCard
              className="card"
              imgPath={imgg}
              title="abcd"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium consequuntur labore vitae magnam non similique impedit cum reprehenderit unde provident libero, est laboriosam repudiandae illum blanditiis quam accusantium perferendis.Lorem ipsum dolor sit"
              ghLink="https://github.com/soumya-maheshwari/JSClock"
              demoLink=""
            />
          </Col> */}
          {/* <Col md={3} className="project-card">
            <ProjectCard
              className="card"
              imgPath={imgg}
              title="abcd"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium consequuntur labore vitae magnam non similique impedit cum reprehenderit unde provident libero, est laboriosam repudiandae illum blanditiis quam accusantium perferendis.Lorem ipsum dolor sit"
              ghLink="https://github.com/soumya-maheshwari/TIC-TAC-TOE"
              demoLink=""
            />
          </Col> */}
          {/* <Col md={3}>
            <ProjectCard
              imgPath={imgg}
              title="abcd"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium consequuntur labore vitae magnam non similique impedit cum reprehenderit unde provident libero, est laboriosam repudiandae illum blanditiis quam accusantium perferendis.Lorem ipsum dolor sit"
              ghLink=""
              demoLink=""
            />
          </Col> */}
          {/* <Col md={3}>
            <ProjectCard
              imgPath={imgg}
              title="abcd"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium consequuntur labore vitae magnam non similique impedit cum reprehenderit unde provident libero, est laboriosam repudiandae illum blanditiis quam accusantium perferendis.Lorem ipsum dolor sit"
              ghLink=""
              demoLink=""
            />
          </Col> */}
          {/* <Col md={3}>
            <ProjectCard
              imgPath={imgg}
              title="abcd"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium consequuntur labore vitae magnam non similique impedit cum reprehenderit unde provident libero, est laboriosam repudiandae illum blanditiis quam accusantium perferendis.
            Lorem ipsum dolor sit"
              ghLink=""
              demoLink=""
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
