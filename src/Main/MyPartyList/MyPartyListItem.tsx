import React from "react"
import { Badge, Col, Container, ListGroup, Row } from "react-bootstrap"
// import { FaUser } from "react-icons/all"
import PartyProps from "../../interfaces/PartyProps"
import { ListGroupItemProps } from "react-bootstrap/ListGroupItem"

interface PartyListElementProps extends PartyProps {
  bubblecount?: number
}

const MyPartyListItem: React.FC<PartyListElementProps> = props => {
  return (
    <Container fluid className="px-2">
      <Row className="align-items-center h-100">
        {/* Icon */}
        <Col className="text-center" xs={"auto"}>
          {/* TODO: Compatible Icon Here */}
          {/*<FaUser />*/}
        </Col>
        <Col>
          {/* Title */}
          <Row className="fw-bold m-1">{props.name}</Row>
          {/* Content */}
          <Row className="fw-light m-1">
            <small className="p-0">{props.content}</small>
          </Row>
        </Col>

        <Col className="text-end p-0" xs={"auto"}>
          {/* Date */}
          <Row>
            <small>{props.date.toLocaleDateString()}</small>
          </Row>
          {/* Bubble */}
          <Row>
            {props.bubblecount === 0 ? (
              <small>&nbsp;</small>
            ) : (
              <small>
                <Badge pill bg="primary">
                  {props.bubblecount}
                </Badge>
              </small>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

MyPartyListItem.defaultProps = { bubblecount: 0 }

const MyPartyListItemWrapper: React.FC<PartyListElementProps & ListGroupItemProps> = props => {
  return (
    <ListGroup.Item {...props}>
      <MyPartyListItem {...props} />
    </ListGroup.Item>
  )
}

export default MyPartyListItemWrapper
