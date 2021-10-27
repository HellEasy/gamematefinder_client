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
      <Container fluid className="p-0">
        <Navbar.Brand className="ms-0">
          <NavDropdown
            title={<img src={gameList[game].imgsrc} height="75" alt={`${gameList[game].name} Logo`} />}
            menuVariant="dark"
            className="p-0"
          >
            {Object.entries(gameList).map(([key, value]) => (
              <NavDropdown.Item href={value.href} onClick={() => setGame(key)}>
                <img src={value.imgsrc} height="75" alt={`${value.name} Logo`} />
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="p-0">
          <Nav className="ms-auto px-3 py-1">
            {/* TODO: onclick Action for 나의 파티 */}
            <Nav.Link className="d-block d-sm-none fw-bold fs-3">나의 파티</Nav.Link>
            <Nav.Link href="#feaures" className="text-uppercase fw-bold fs-3">
              <Image roundedCircle src={UserImage} width="32px" /> User Name
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default CustomNavbar
