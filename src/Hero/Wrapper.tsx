import React from "react"
import { Container } from "react-bootstrap"

const Wrapper: React.FC<React.HTMLAttributes<HTMLElement> & { hero?: boolean }> = props => {
  // TODO: Wrapper for mobile
  // TODO: Wrap with Animation Wrapper
  //  https://www.framer.com/docs/component/#custom-components
  return (
    <div className={`position-relative h-100${props.hero ? " hero" : ""}`}>
      <Container fluid className={`position-absolute${props.className ? " " + props.className : ""}`}>
        {props.children}
      </Container>
    </div>
  )
}

Wrapper.defaultProps = {
  hero: false,
}

export default Wrapper
