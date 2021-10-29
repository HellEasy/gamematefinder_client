import React from "react"
import { Button, Col, Form as BSForm, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Form: React.FC<React.HTMLAttributes<HTMLElement>> = props => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <BSForm {...props}>
        <Row className="align-items-center w-100">
          <Col xs lg="2" className="fw-bold w-100">
            ID
          </Col>
          <Col xs={6}>
            <BSForm.Control required className="rounded-3" type="text" />
          </Col>
          <Col>
            <Button className="doublecheck">중복확인</Button>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs lg="2" className="fw-bold w-100">
            Password
          </Col>
          <Col xs={6}>
            <BSForm.Control required className="rounded-3" type="text" />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs lg="2" className="fw-bold w-100">
            이름
          </Col>
          <Col xs={6}>
            <BSForm.Control required className="rounded-3" type="text" />
          </Col>
        </Row>
        <Row className="align-items-center">
          <BSForm.Group as={Col} className="mb-3" controlId="formSignUpBirthDay">
            <BSForm.Label className="fw-bold">생년월일</BSForm.Label>
            <BSForm.Control required className="rounded-3" type="date" />
          </BSForm.Group>
        </Row>
        <Row className="align-items-center">
          <Col xs lg="2" className="fw-bold w-100">
            성별
          </Col>
          <Col xs={6}>
            <BSForm.Select required className="rounded-3">
              <option value="male">남자</option>
              <option value="female">여자</option>
              <option value="unknown">선택안함</option>
            </BSForm.Select>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs lg="2" className="fw-bold w-100">
            E-mail
          </Col>
          <Col xs={6}>
            <BSForm.Control required className="rounded-3" type="email" placeholder="name@example.com" />
          </Col>
        </Row>
        <Row className="align-items-center w-100">
          <Col xs lg="2" className="fw-bold w-100">
            본인인증
          </Col>
          <Col xs={6}>
            <BSForm.Control required className="rounded-3" type="text" placeholder="010-xxxx-xxxx" />
          </Col>
          <Col>
            <Button className="codesend">인증번호 받기</Button>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs lg="2" className="fw-bold w-100">
            인증번호 입력
          </Col>
          <Col xs={6}>
            <BSForm.Control required className="rounded-3" type="text" />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Link to="#">
            <Button type="submit" variant="primary" className="btn btn-lg fs-6 fw-bold w-100 mt-3">
              Sign Up
            </Button>
          </Link>
        </Row>
        <Row className="text-center my-3">
          <Link to="/login">Already have an Account?</Link>
        </Row>
      </BSForm>
    </motion.div>
  )
}

const Hero: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1> Welcome! </h1>
    </motion.div>
  )
}

export { Form, Hero }
