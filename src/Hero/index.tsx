import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Route } from "react-router-dom"
import "./index.scss"
import Wrapper from "./Wrapper"
import { Form as LoginForm, Hero as LoginHero } from "./Login"
import { Form as SignUpForm, Hero as SignUpHero } from "./SignUp"
import { CSSTransition } from "react-transition-group"

const HeroPage = () => {
  // FIXME: FindDOMNode Deprecated
  // https://github.com/reactjs/react-transition-group/releases/tag/v4.4.0

  return (
    <Container fluid className="hero-page-container p-0">
      <Row className="m-0 h-100">
        <Col className="p-0 h-100" md={8}>
          <Wrapper hero>
            <Route key="/login" exact path="/login">
              {({ match }) => (
                <CSSTransition in={match != null} timeout={300} classNames="fade" unmountOnExit>
                  <LoginHero />
                </CSSTransition>
              )}
            </Route>
            <Route key="/signup" exact path="/signup">
              {({ match }) => (
                <CSSTransition in={match != null} timeout={300} classNames="fade" unmountOnExit>
                  <SignUpHero />
                </CSSTransition>
              )}
            </Route>
          </Wrapper>
        </Col>
        <Col className="p-5 h-100" md={4}>
          <Wrapper>
            <Route key="/login" exact path="/login">
              {({ match }) => (
                <CSSTransition in={match != null} timeout={300} classNames="fade" unmountOnExit>
                  <LoginForm />
                </CSSTransition>
              )}
            </Route>
            <Route key="/signup" exact path="/signup">
              {({ match }) => (
                <CSSTransition in={match != null} timeout={300} classNames="fade" unmountOnExit>
                  <SignUpForm />
                </CSSTransition>
              )}
            </Route>
          </Wrapper>
        </Col>
      </Row>
    </Container>
  )
}

export default HeroPage
