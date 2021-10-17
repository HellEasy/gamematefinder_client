import React from "react"
import { Button, Col, Form, Row } from "react-bootstrap"

const LoginForm = () => {
  return (
    <Form className="m-3">
      <Row className="mb-1">
        <Form.Group as={Col} className="mb-3" controlId="formLoginID">
          <Form.Label className="fw-bold">ID</Form.Label>
          <Form.Control required className="rounded-3" type="text" />
        </Form.Group>
      </Row>
  
      <Row className="mb-1">
        <Form.Group as={Col} className="mb-3" controlId="formLoginPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control required className="rounded-3" type="password" />
        </Form.Group>
      </Row>
  
      <Row className="mb-3">
        <Col>
          <Form.Check label="아이디 저장" type="checkbox" />
        </Col>
        <Col>
          <Form.Check label="자동 로그인" type="checkbox" />
        </Col>
      </Row>
  
      <Row className="mb-3 g-2">
        <Col>
          <Button type="submit" variant="primary" className="btn btn-lg fs-6 fw-bold w-100">
            LOG IN
          </Button>
        </Col>
        <Col>
          <Button type="button" variant="outline-primary" className="btn btn-lg fs-6 fw-bold w-100">
            SIGN UP
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default LoginForm
