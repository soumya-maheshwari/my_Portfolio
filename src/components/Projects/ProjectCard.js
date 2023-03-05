import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { BsGithub } from "react-icons/bs";
import "./projectCard.css";

const ProjectCard = (props) => {
  return (
    <div>
      <Container fluid>
        <Card className="project-card">
          <Card.Img variant="top" src={props.imgPath} alt="img"></Card.Img>

          <Card.Body>
            <Card.Title>{props.title}</Card.Title>

            <Card.Text>{props.description}</Card.Text>
            <Button variant="primary" href={props.ghLink}>
              <BsGithub />
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ProjectCard;
