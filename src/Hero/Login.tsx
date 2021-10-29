import React from "react"
import { Button, Col, Form as BSForm, Image, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import LolImg from "../img/GameLogo/lol.png"
import LostArkImg from "../img/GameLogo/lostark.png"
import { motion } from "framer-motion"

const Form = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  return (
    <div ref={ref}>
      <BSForm {...props} className={`m-3${props.className ? " " + props.className : ""}`}>
        <Row className="mb-1">
          <BSForm.Group as={Col} className="mb-3" controlId="formLoginID">
            <BSForm.Label className="fw-bold">ID</BSForm.Label>
            <BSForm.Control required className="rounded-3" type="text" />
          </BSForm.Group>
        </Row>
        <Row className="mb-1">
          <BSForm.Group as={Col} className="mb-3" controlId="formLoginPassword">
            <BSForm.Label className="fw-bold">Password</BSForm.Label>
            <BSForm.Control required className="rounded-3" type="password" />
          </BSForm.Group>
        </Row>
        <Row className="mb-3">
          <Col>
            <BSForm.Check label="아이디 저장" type="checkbox" />
          </Col>
          <Col>
            <BSForm.Check label="자동 로그인" type="checkbox" />
          </Col>
        </Row>
        <Row className="mb-3 g-2">
          <Col>
            <Link to="/">
              <Button type="submit" variant="primary" className="btn btn-lg fs-6 fw-bold w-100">
                LOG IN
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/signup">
              <Button type="button" variant="outline-primary" className="btn btn-lg fs-6 fw-bold w-100">
                SIGN UP
              </Button>
            </Link>
          </Col>
        </Row>
      </BSForm>
    </div>
  )
})
const Hero: React.FC<React.HTMLAttributes<HTMLDivElement> & { breakpoint: string }> = props => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1 className={`d-block d-${props.breakpoint}-none`}>GAME MATE FINDER</h1>
      <h1 className={`d-none d-${props.breakpoint}-block`}>
        GAME
        <br />
        MATE
        <br />
        FINDER
        <br />
      </h1>
      <div>
        <Image src={LolImg} height="75" alt="Lol Logo" />
        <Image src={LostArkImg} height="75" alt="LostArk Logo" />
      </div>
    </motion.div>
  )
}

export { Form, Hero }
