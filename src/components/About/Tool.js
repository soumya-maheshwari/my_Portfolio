import React from "react";
import { SiVisualstudiocode } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { Row, Col } from "react-bootstrap";
import "./tool.css";
const Tool = () => {
  return (
    <Row>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub />
      </Col>
    </Row>
  );
};

export default Tool;
