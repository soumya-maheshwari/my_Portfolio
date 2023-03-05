import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { CgGitFork } from "react-icons/cg";
import logo from "../../assets/mylogo.png";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import "./header.css";
const Header = () => {
  const [expand, setExpand] = useState(false);
  const [navColor, setNavColor] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColor ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            setExpand(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link to="/" onClick={() => setExpand(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} />
                HOME
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/about" onClick={() => setExpand(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> ABOUT
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                // as={Link}
                to="/project"
                onClick={() => setExpand(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                PROJECTS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumya-maheshwari/my_Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
