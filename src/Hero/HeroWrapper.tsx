import React from "react"
import "./HeroWrapper.scss"
import { Col, Container, Row } from "react-bootstrap"

const HeroWrapper: React.FC<React.HTMLAttributes<HTMLElement>> = props => {
  return (
    <Container fluid className="hero">
      <Row className="align-items-center h-100">
        <Col>{props.children}</Col>
      </Row>
    </Container>
  )
}

export default HeroWrapper
