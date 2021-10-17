import React from "react"

import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap"
import LolImg from "../../img/GameLogo/lol.png"
import LostarkImg from "../../img/GameLogo/lostark.png"
import UserImage from "../../img/UserImage.jpg"

const CustomNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" sticky="top" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="me-auto">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#lol">
                <img src={LolImg} height="75" alt="Lol Logo" />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <img src={LostarkImg} height="75" alt="LostArk Logo" />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#feaures" className="text-uppercase fw-bold">
              <Image roundedCircle src={UserImage} width="32px" /> User Name
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default CustomNavbar
