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
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi there !!!
                  <span className="wave" role="img" aria-labelledby="wave">
                    {" "}
                    👋🏻
                  </span>
                </h1>
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> SOUMYA MAHESHWARI</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              {/* <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col> */}
            </Row>
          </Container>
        </Container>
        <Home2 />
        <Contact />
      </section>
    </div>
  );
};

export default Home;
