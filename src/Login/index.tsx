import React from "react"
import "./LoginPage.scss"
import LoginHero from "./LoginHero"
import LoginForm from "./LoginForm"
import { Col, Container, Row } from "react-bootstrap"

const LoginPage = () => {
  return (
    <Container fluid className="login-page-container p-0">
      <Row className="align-items-center m-0 h-100">
        <Col className="p-0 h-100 col-md-8">
          <LoginHero />
        </Col>
        <Col className="p-5 col-md-4">
          <LoginForm />
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage
