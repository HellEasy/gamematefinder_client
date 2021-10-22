import React from "react"
import { Form as BSForm } from "react-bootstrap"
import { Link } from "react-router-dom"

const Form: React.FC<React.HTMLAttributes<HTMLElement>> = props => {
  return (
    <BSForm className={props.className}>
      {/* TODO: implement signup form */}
      <Link to="/login">log in</Link>
    </BSForm>
  )
}

const Hero: React.FC<React.HTMLAttributes<HTMLElement>> = props => {
  return (
    <div className={props.className}>
      <h1>Welcome!</h1>
    </div>
  )
}

export { Form, Hero }
