import React from "react"
import "./Wrapper.scss"
import { Col, Container, Row } from "react-bootstrap"
import { motion } from "framer-motion"

const Wrapper: React.FC<React.HTMLAttributes<HTMLElement> & { hero: React.ReactElement; form: React.ReactElement }> =
  props => {
    const AnimatedHero = <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {props.hero}
    </motion.div>
    const AnimatedForm = <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {props.form}
    </motion.div>

    return (
      <>
        <Container fluid className="d-none d-md-block p-0 vh-100">
          <Row className="m-0 h-100">
            <Col className="hero p-0 position-relative" md={8}>
              <Container fluid className="position-absolute top-50 translate-middle-y">
                {AnimatedHero}
              </Container>
            </Col>
            <Col className="form-col p-0 position-relative overflow-auto">
              <Container fluid className="position-absolute top-50 translate-middle-y">
                {AnimatedForm}
              </Container>
            </Col>
          </Row>
        </Container>

        {/* Mobile */}
        <Container fluid className="d-block d-md-none p-0 vh-100">
          <Container fluid className="hero p-5 sticky-top">
            {AnimatedHero}
          </Container>
          <Container fluid className="p-3">
            {AnimatedForm}
          </Container>
        </Container>
      </>
    )
  }

export default Wrapper
