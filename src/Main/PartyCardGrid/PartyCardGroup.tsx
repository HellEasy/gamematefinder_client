import { Col, Container, Row } from "react-bootstrap"
import React from "react"

const PartyCardGroup: React.FC<React.HTMLAttributes<HTMLElement>> = props => {
  return (
    <Container fluid {...props}>
      <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
        {React.Children.map(props.children, child => (
          <Col>{child}</Col>
        ))}
      </Row>
    </Container>
  )
}

export default PartyCardGroup
