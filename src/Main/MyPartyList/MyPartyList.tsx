import React from "react"
import { ListGroup } from "react-bootstrap"
import { ListGroupProps } from "react-bootstrap/ListGroup"

const MyPartyList: React.FC<ListGroupProps> = props => {
  return (
    <ListGroup variant="flush" {...props}>
      {props.children}
    </ListGroup>
  )
}

export default MyPartyList
