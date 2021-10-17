import React from "react"
import PartyProps from "../../interfaces/PartyProps"
import { Card } from "react-bootstrap"
import { BiTimeFive } from "react-icons/all"

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
    if (Math.abs(elapsed) > value)
      return rtf.format(Math.round(elapsed / value), unit as units)
  
  return rtf.format(Math.round(elapsed / unitsTable.second), "second")
}

const PartyCard: React.FC<PartyProps> = (props) => {
  return (
    <Card className="border-0 m-2">
      <Card.Img variant="top" src={props.imgsrc} />
      <Card.Body className="pt-4 pb-2">
        {/* Title */}
        <Card.Title className="fw-bold">{props.name}</Card.Title>
        {/* Content */}
        <Card.Text className="text-muted fw-light">
          <small>{props.content}</small>
        </Card.Text>
        {/* Date */}
        <Card.Text className="text-muted fw-light">
          <small><BiTimeFive /> {getRTF(props.date)}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

PartyCard.defaultProps = {
  imgsrc: "https://picsum.photos/360/180",
}

export default PartyCard