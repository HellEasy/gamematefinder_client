import React from "react"
import { Button, Col, Form as BSForm, Image, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Form: React.FC<React.HTMLAttributes<HTMLElement>> = props => {
  return (
    <BSForm className={`${props.className ? props.className : ""}`}>
       <Row className = "align-items-center w-100">
         <Col xs lg="2" className = "fw-bold w-100">
           ID
         </Col>
         <Col xs = {6}>
          <BSForm.Control required className = "rounded-3" type="text"/>
         </Col>
         <Col>
          <Button className = "doublecheck">중복확인</Button>
         </Col>
       </Row>
       <Row className = "align-items-center">
         <Col xs lg="2" className = "fw-bold w-100">
           Password
         </Col>
         <Col xs = {6}>
          <BSForm.Control required className = "rounded-3" type="text"/>
         </Col>
       </Row>
       <Row className = "align-items-center">
         <Col xs lg="2" className = "fw-bold w-100">
           이름
         </Col>
         <Col xs = {6}>
          <BSForm.Control required className = "rounded-3" type="text"/>
         </Col>
       </Row>
       <Row className = "align-items-center">
         <Col xs lg="2" className = "fw-bold w-100">
           생년월일
         </Col>
         <Col>
          <BSForm.Control required className = "rounded-3" type="text" placeholder = "년(4자)"/>
         </Col>
         <Col>
          <BSForm.Select required className = "rounded-3">
            <option value = "unselect">월</option>
            <option value = "1">1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
            <option value = "4">4</option>
            <option value = "5">5</option>
            <option value = "6">6</option>
            <option value = "7">7</option>
            <option value = "8">8</option>
            <option value = "9">9</option>
            <option value = "10">10</option>
            <option value = "11">11</option>
            <option value = "12">12</option>
          </BSForm.Select>
         </Col>
         <Col>
          <BSForm.Control required className = "rounded-3" type="text" placeholder="일"/>
         </Col>
       </Row>
       <Row className = "align-items-center">
         <Col xs lg="2" className = "fw-bold w-100">
           성별
         </Col>
         <Col xs = {6}>
          <BSForm.Select required className = "rounded-3">
            <option value = "male">남자</option>
            <option value = "female">여자</option>
            <option value = "unknown">선택안함</option>
          </BSForm.Select>
         </Col>
       </Row>
       <Row className = "align-items-center">
         <Col xs lg="2" className = "fw-bold w-100">
           E-mail
         </Col>
         <Col xs = {6}>
          <BSForm.Control required className = "rounded-3" type="email" placeholder="name@example.com"/>
         </Col>
       </Row>
       <Row className = "align-items-center w-100">
         <Col xs lg="2" className = "fw-bold w-100">
           본인인증
         </Col>
         <Col xs = {6}>
          <BSForm.Control required className = "rounded-3" type="text" placeholder = "010-xxxx-xxxx"/>
         </Col>
         <Col>
          <Button className = "codesend">인증번호 받기</Button>
         </Col>
       </Row>
       <Row className = "align-items-center">
         <Col xs lg="2" className = "fw-bold w-100">
           인증번호 입력
         </Col>
         <Col xs = {6}>
          <BSForm.Control required className = "rounded-3" type="text"/>
         </Col>
       </Row>
       <Row className = "align-items-center">
          <Link to="/login">
            <Button type="submit" variant="primary" className="btn btn-lg fs-6 fw-bold w-100 mt-3">
              Sign Up
            </Button>
          </Link>
       </Row>
      
    </BSForm>
  )
}

const Hero: React.FC<React.HTMLAttributes<HTMLElement>> = props => {
  return (
    <div className={`${props.className ? props.className : ""}`}>
      <h1>Welcome!</h1>
    </div>
  )
}

export { Form, Hero }
