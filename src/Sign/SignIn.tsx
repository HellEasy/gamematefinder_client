import React from "react"
import { Button, Col, Form as BSForm, Image, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import LolImg from "../img/GameLogo/lol.png"
import LostArkImg from "../img/GameLogo/lostark.png"
import { motion } from "framer-motion"
import Wrapper from "./Wrapper"

const Form: React.FC<React.HTMLAttributes<HTMLElement>> = props => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <BSForm {...props} className="m-3">
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
    </motion.div>
  )
}

const Hero: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>
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

const Page = () => {
  return <Wrapper hero={<Hero />} form={<Form />} />
}

export { Form, Hero, Page }
