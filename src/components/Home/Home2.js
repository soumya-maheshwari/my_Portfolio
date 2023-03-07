import React from "react";
import "./home2.css";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../assets/myAvatar.png";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="intro">
              a <span> second year</span> engineering student pursuing{" "}
              <span>BTech </span> in <span>Computer Science</span> from{" "}
              <span className="clg"> Ajay Kumar Garg Engineering College </span>
              . I am an <span> Aspiring Software Developer </span>and a
              <span> Competitive Programmer </span>. I have worked on{" "}
              <span className="lang"> HTML , CSS , JavaScript, ReactJS</span>{" "}
              and has also made projects with them . I am passionate towards my
              work and keen to learn new technologies.
              <br />
              <br />I am currently learning <span> Blockchain development</span>
            </p>
          </Col>
          <Col md={4} className="myavtar">
            <Tilt>
              <img src={myImg} alt="soumya" className="avtar img-fluid " />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p className="connect">
              Feel free to &nbsp;<span className="purple">connect </span>
              &nbsp;with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumya-maheshwari"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumya-maheshwari-a4397a229/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumya__maheshwari"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home2;
