import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import "./home.css";
import Home2 from "./Home2";
const Home = () => {
  return (
    <div>
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1>
                  hi there !!!
                  <span className="wave"> 👋🏻</span>
                </h1>
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> SOUMYA MAHESHWARI</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Home2 />
      </section>
    </div>
  );
};

export default Home;
