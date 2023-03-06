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
              a <span> second year</span> engineering student pursuing{" "}
              <span>BTech </span> in <span>Computer Science</span> from{" "}
              <span className="clg"> Ajay Kumar Garg Engineering College </span>
              . I am an <span> Aspiring Software Developer </span>and a
              <span> Competitive Programmer </span>. I have worked on{" "}
              <span className="lang"> HTML , CSS , JavaScript, ReactJS</span>{" "}
              and has also made projects with them . I am passionate towards my
              work and keen to learn new technologies.
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
