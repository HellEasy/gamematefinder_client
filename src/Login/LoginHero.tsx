import React from "react"
import LostArkImg from "../img/GameLogo/lostark.png"
import LolImg from "../img/GameLogo/lol.png"
import "./LoginHero.scss"
import { Col, Container, Row } from "react-bootstrap"

const LoginHero = () => {
  return (
    <Container fluid className="hero">
      <Row className="align-items-center h-100">
        <Col>
          <h1>GAME</h1>
          <h1>MATE</h1>
          <h1>FINDER</h1>
          <div>
            <img src={LolImg} height="75" alt="Lol Logo" />
            <img src={LostArkImg} height="75" alt="LostArk Logo" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginHero
