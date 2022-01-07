import React from "react"
import PartyProps from "../../interfaces/PartyProps"
import { Card, Placeholder } from "react-bootstrap"
import { BiTimeFive } from "react-icons/bi"
import { Link } from "react-router-dom"
import "./PartyCard.scss"

function getRTF(date: Date): string {
  type units = "year" | "month" | "day" | "hour" | "minute" | "second"
  const unitsTable: { [key in units]: number } = {
    year: 31536000000,
    month: 2628000000,
    day: 86400000,
    hour: 3600000,
    minute: 60000,
    second: 1000,
  }

  const rtf = new Intl.RelativeTimeFormat("kr", { numeric: "auto" })
  const elapsed = date.getTime() - new Date().getTime()

  for (let [unit, value] of Object.entries(unitsTable))
    if (Math.abs(elapsed) > value) return rtf.format(Math.round(elapsed / value), unit as units)

  return rtf.format(Math.round(elapsed / unitsTable.second), "second")
}

interface PartyCardProps extends Partial<PartyProps> {}

const PartyCard: React.FC<PartyCardProps> = props => {
  return (
    <Link to="" className="remove-a-style">
      <Card className="border-0 m-2">
        <Card.Img variant="top" src={props.imgsrc} />
        <Card.Body className="pt-3 pb-2">
          {/* Title */}
          {props.name ? (
            <Card.Title className="fw-bold">{props.name}</Card.Title>
          ) : (
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
          )}

          {/* Content */}
          {props.content ? (
            <Card.Text className="text-muted fw-light">
              <small>{props.content}</small>
            </Card.Text>
          ) : (
            <Placeholder as={Card.Text} animation="glow">
              <small>
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </small>
            </Placeholder>
          )}

          {/* Date */}
          <Card.Text className="text-muted fw-light mb-2">
            <small>
              <BiTimeFive />{" "}
              {props.date ? (
                getRTF(props.date)
              ) : (
                <Placeholder animation="glow">
                  <Placeholder xs={4} />
                </Placeholder>
              )}
            </small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

PartyCard.defaultProps = {
  imgsrc: "https://picsum.photos/360/180",
}

export default PartyCard
