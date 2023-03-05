import React from "react";
import { Row, Col } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { AiFillHtml5 } from "react-icons/ai";
import {
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiExpress } from "react-icons/si";
import "./tech.css";

const Tech = () => {
  return (
    <div>
      <Row>
        <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <AiFillHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <BsFillBootstrapFill />
        </Col>
      </Row>
    </div>
  );
};

export default Tech;
