import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Route } from "react-router-dom"
import "./index.scss"
import { Form as LoginForm, Hero as LoginHero } from "./Login"
import { Form as SignUpForm, Hero as SignUpHero } from "./SignUp"
import Wrapper from "./Wrapper"

const breakpoint = "lg"

const HeroPage = () => {
  // FIXME: FindDOMNode Deprecated
  // https://github.com/reactjs/react-transition-group/releases/tag/v4.4.0

  return (
    <>
      {/*/!* mobile *!/*/}
      <Container fluid className={`d-block d-${breakpoint}-none p-0 vh-100`}>
        <HeroComponent />
        <FormComponent />
      </Container>

      <Container fluid className={`d-none d-${breakpoint}-block p-0 vh-100`}>
        <Row className="m-0 h-100">
          <Col className="p-0" md={8}>
            <HeroComponent />
          </Col>
          <Col className="p-0">
            <FormComponent />
          </Col>
        </Row>
      </Container>
    </>
  )
}

const HeroComponent = () => {
  return (
    <Wrapper hero className="top-50 translate-middle-y">
      <Route key="/login" exact path="/login" render={() => <LoginHero breakpoint={breakpoint} />} />
      <Route key="/signup" exact path="/signup" component={SignUpHero} />
    </Wrapper>
  )
}

const FormComponent = () => {
  return (
    <Wrapper className="top-50 translate-middle-y">
      <Route key="/login" exact path="/login" component={LoginForm} />
      <Route key="/signup" exact path="/signup" component={SignUpForm} />
    </Wrapper>
  )
}

export default HeroPage
