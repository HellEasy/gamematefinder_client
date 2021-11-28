import React from "react"
import "./Wrapper.scss"
import { Col, Container, Row } from "react-bootstrap"

const Wrapper: React.FC<React.HTMLAttributes<HTMLElement> & { hero: React.ReactElement; form: React.ReactElement }> =
  props => (
    <Container fluid className="p-0 vh-100">
      <Row className="m-0 h-100">
        <Col className="hero p-0 position-relative" md={8}>
          <Container fluid className="position-absolute top-50 translate-middle-y">
            {props.hero}
          </Container>
        </Col>
        <Col className="p-0 position-relative">
          <Container fluid className="position-absolute top-50 translate-middle-y">
            {props.form}
          </Container>
        </Col>
      </Row>
    </Container>
  )

export default Wrapper
