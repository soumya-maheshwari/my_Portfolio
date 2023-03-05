import React from "react";
import "./home2.css";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../assets/myAvatar.png";
const Home2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="intro">
              a second year engineering student pursuing Btech in "Computer
              Science" from "Ajay Kumar Garg Engineering College. I am an
              Aspiring Software Developer and a Competitive Programmer. I have
              worked on HTML , CSS , JavaScript, ReactJS and has also made
              projects with them . I am passionate towards my work and keen to
              learn new technologies.
            </h1>
          </Col>
          {/* <Col md={4} className="myavtar">
            <Tilt>
              <img src={myImg} alt="soumya" />
            </Tilt>
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
};

export default Home2;
