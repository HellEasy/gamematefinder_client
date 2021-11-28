import React from "react"
import "./Wrapper.scss"
import { Col, Container, Row } from "react-bootstrap"
import { motion } from "framer-motion"

const Wrapper: React.FC<React.HTMLAttributes<HTMLElement> & { hero: React.ReactElement; form: React.ReactElement }> =
  props => (
    <Container fluid className="p-0 vh-100">
      <Row className="m-0 h-100">
        <Col className="hero p-0 position-relative" md={8}>
          <Container fluid className="position-absolute top-50 translate-middle-y">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {props.hero}
            </motion.div>
          </Container>
        </Col>
        <Col className="p-0 position-relative">
          <Container fluid className="position-absolute top-50 translate-middle-y">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {props.form}
            </motion.div>
          </Container>
        </Col>
      </Row>
    </Container>
  )

export default Wrapper
