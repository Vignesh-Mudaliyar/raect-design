import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import NavLogo from "../../assets/nav-logo.svg";
import Button from "../Button";
import "./header.css";

export default function Header() {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="#">
          <img src={NavLogo} />
        </Navbar.Brand>
        <span className="toggle-nav">
          <Button text={"Login"} />
        </span>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", margin: "20px" }}
            navbarScroll
          >
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Product</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Your Email"
              className="me-2 input"
              aria-label="Search"
            />
            <Button text={"Subscribe"} />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
