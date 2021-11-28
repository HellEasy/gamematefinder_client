import React from "react"
import { Button, Col, Form as BSForm, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import Wrapper from "./Wrapper"

const Form: React.FC<React.HTMLAttributes<HTMLElement>> = props => {
  return (
    <>
      <BSForm {...props} className="m-3">
        <Row className="align-items-center">
          <BSForm.Group as={Col} className="mb-3" controlId="formSignUpId">
            <BSForm.Label className="fw-bold">ID</BSForm.Label>
            <Row className="align-items-center">
              <Col xxl={8}>
                <BSForm.Control required className="rounded-3" type="text" />
              </Col>
              <Col className="my-2">
                <Button className="w-100 doublecheck" variant="outline-primary">
                  중복확인
                </Button>
              </Col>
            </Row>
          </BSForm.Group>
        </Row>
        {/*ID group */}
        <Row className="align-items-center">
          <BSForm.Group as={Col} className="mb-3" controlId="formSignUpPassword">
            <BSForm.Label className="fw-bold">Password</BSForm.Label>
            <BSForm.Control required className="rounded-3" type="password" />
          </BSForm.Group>
        </Row>
        <Row className="align-items-center">
          <BSForm.Group as={Col} className="mb-3" controlId="formSignUpName">
            <BSForm.Label className="fw-bold">이름</BSForm.Label>
            <BSForm.Control required className="rounded-3" type="text" />
          </BSForm.Group>
        </Row>
        <Row className="align-items-center">
          <BSForm.Group as={Col} className="mb-3" controlId="formSignUpBirthDay">
            <BSForm.Label className="fw-bold">생년월일</BSForm.Label>
            <BSForm.Control required className="rounded-3" type="date" />
          </BSForm.Group>
        </Row>
        <Row className="align-items-center">
          <BSForm.Group as={Col} className="mb-3" controlId="formSignUpSex">
            <BSForm.Label className="fw-bold">성별</BSForm.Label>
            <ToggleButtonGroup className="w-100" type="radio" name="options" defaultValue={1}>
              <ToggleButton id="tbg-radio-1" value={1} variant={"outline-primary"}>
                남자
              </ToggleButton>
              <ToggleButton id="tbg-radio-2" value={2} variant={"outline-primary"}>
                여자
              </ToggleButton>
              <ToggleButton id="tbg-radio-3" value={3} variant={"outline-primary"}>
                선택안함
              </ToggleButton>
            </ToggleButtonGroup>
          </BSForm.Group>
        </Row>
        <Row className="align-items-center">
          <BSForm.Group as={Col} className="mb-3" controlId="formSignUpMail">
            <BSForm.Label className="fw-bold">E-mail</BSForm.Label>
            <BSForm.Control required className="rounded-3" type="email" placeholder="name@example.com" />
          </BSForm.Group>
        </Row>
        <Row className="align-items-center">
          <BSForm.Group as={Col} className="mb-3" controlId="formSignUpId">
            <BSForm.Label className="fw-bold">본인인증</BSForm.Label>
            <Row className="align-items-center">
              <Col xxl={8}>
                <BSForm.Control required className="rounded-3" type="text" placeholder="010-xxxx-xxxx" />
              </Col>
              <Col className="my-2">
                <Button className="w-100 codesend" variant="outline-primary">
                  인증번호 받기
                </Button>
              </Col>
            </Row>
          </BSForm.Group>
        </Row>
        <Row className="align-items-center">
          <BSForm.Group as={Col} className="mb-3" controlId="formSignUpAuthenticationNumber">
            <BSForm.Label className="fw-bold">인증번호 입력</BSForm.Label>
            <BSForm.Control required className="rounded-3 w-100" type="text" />
          </BSForm.Group>
        </Row>
        <Row className="align-items-center">
          <Link to="#">
            <Button type="submit" variant="primary" className="btn btn-lg fs-6 fw-bold w-100 mt-3">
              Sign Up
            </Button>
          </Link>
        </Row>
        <Row className="text-center my-3">
          <Link to="/signin">Already have an Account?</Link>
        </Row>
      </BSForm>
    </>
  )
}

const Hero: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => <h1> Welcome! </h1>

const Page = () => {
  return <Wrapper hero={<Hero />} form={<Form />} />
}

export { Form, Hero, Page }
