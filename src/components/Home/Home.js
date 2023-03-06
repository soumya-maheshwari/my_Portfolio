import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import "./home.css";
import Footer from "../../components/Footer/Footer";
import Home2 from "./Home2";
import Contact from "../Contact/Contact";
const Home = () => {
  return (
    <div>
      <section>
        <Container fluid className="home-section" id="home">
          {/* <Particle /> */}
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ fontSize: 50 }}>
                  Hi there !!!
                  <span className="wave"> 👋🏻</span>
                </h1>
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> SOUMYA MAHESHWARI</strong>
                </h1>

                <div style={{ padding: 70, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Home2 />
        <Contact />
        <Footer />
      </section>
    </div>
  );
};

export default Home;
