import React, { useState } from "react"
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap"
import LolImg from "../../img/GameLogo/lol.png"
import LostarkImg from "../../img/GameLogo/lostark.png"
import UserImage from "../../img/UserImage.jpg"

interface GameProperty {
  name: string
  imgsrc: string
  href: string
}

const CustomNavbar = () => {
  const gameList: { [key: string]: GameProperty } = {
    lol: {
      name: "League of Legends",
      imgsrc: LolImg,
      href: "#",
    },
    lostark: {
      name: "LostArk",
      imgsrc: LostarkImg,
      href: "#",
    },
  }
  type Game = keyof typeof gameList
  const [game, setGame] = useState<Game>("lol")

  return (
    <Navbar bg="primary" variant="dark" sticky="top" expand="sm">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="me-auto">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={<img src={gameList[game].imgsrc} height="75" alt={`${gameList[game].name} Logo`} />}
              menuVariant="dark"
            >
              {Object.entries(gameList).map(([key, value]) => (
                <NavDropdown.Item href={value.href} onClick={() => setGame(key)}>
                  <img src={value.imgsrc} height="75" alt={`${value.name} Logo`} />
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#feaures" className="text-uppercase fw-bold fs-2">
              <Image roundedCircle src={UserImage} width="32px" /> User Name
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default CustomNavbar
