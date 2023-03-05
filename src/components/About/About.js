import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";
import AboutCard from "./AboutCard";
import Tech from "./Tech";
import Tool from "./Tool";
const About = () => {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row>
          <Col md={7}>
            <h1 style={{ fontSize: 50, paddingBottom: 30 }}>Know who i am</h1>
            <AboutCard />
          </Col>
        </Row>
        <h1 className="skillset-heading">skillset</h1>
        <Tech />
        <h1 className="tools-heading">Tools i use</h1>
        <Tool />
      </Container>
    </Container>
  );
};

export default About;
