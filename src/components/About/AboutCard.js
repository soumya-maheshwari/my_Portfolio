import React from "react";
import { Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import "./aboutCard.css";
const AboutCard = () => {
  return (
    <Card className="card">
      <Card.Body>
        <p style={{ fontSize: 30 }}>
          HI everyone, i am{" "}
          <span style={{ color: "purple" }}> SOUMYA MAHESHWARI </span>.
        </p>
        <br />
        <p style={{ fontSize: 25 }}>
          i am pursuing B.Tech from "AKGEC" in "Computer science"
        </p>
        <p style={{ fontSize: 28 }}>
          apart from coding 👩‍💻 , some other activities that i love to do are
        </p>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <ImPointRight />
            {"     "}
            Listening to songs
          </li>
          <li>
            <ImPointRight />
            {"     "}
            Watching movies
          </li>
          <li>
            <ImPointRight />
            {"     "}
            Hanging out with friends
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
