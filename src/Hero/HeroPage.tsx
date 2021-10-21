import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Route, Switch } from "react-router-dom"
import "./HeroPage.scss"
import HeroWrapper from "./HeroWrapper"
import { Form as LoginForm, Hero as LoginHero } from "./Login"
import { Form as SignUpForm, Hero as SignUpHero } from "./SignUp"

const HeroPage = () => {
  return (
    <Container fluid className="hero-page-container p-0">
      <Row className="align-items-center m-0 h-100">
        <Col className="p-0 h-100 col-md-8">
          <HeroWrapper>
            <Switch>
              <Route path="/login" component={LoginHero} />
              <Route path="/signup" component={SignUpHero} />
            </Switch>
          </HeroWrapper>
        </Col>
        <Col className="p-5 col-md-4">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignUpForm} />
          </Switch>
        </Col>
      </Row>
    </Container>
  )
}

export default HeroPage
