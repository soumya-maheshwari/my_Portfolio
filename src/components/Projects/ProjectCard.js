import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { BsGithub } from "react-icons/bs";
import "./projectCard.css";

const ProjectCard = (props) => {
  return (
    <div>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="img"></Card.Img>

        <Card.Body>
          <Card.Title className="title">{props.title}</Card.Title>

          <Card.Text style={{ text: "justify" }}>{props.description}</Card.Text>
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            className="button"
          >
            <BsGithub />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;
