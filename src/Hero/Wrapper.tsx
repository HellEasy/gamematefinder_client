import React from "react"
import { Container } from "react-bootstrap"
import "./Wrapper.scss"

interface WrapperProps extends React.HTMLAttributes<HTMLElement> {
  hero?: boolean
}

const Wrapper: React.FC<WrapperProps> = props => {
  return (
    <Container fluid className={`wrapper${props.hero ? " hero" : ""}`}>
      {props.children}
    </Container>
  )
}

export default Wrapper
