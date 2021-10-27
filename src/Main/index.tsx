import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import PartyCardGroup from "./PartyCardGrid/PartyCardGroup"
import MyPartyList from "./MyPartyList/MyPartyList"
import PartyCard from "./PartyCardGrid/PartyCard"
import Navbar from "./Navbar"
import MyPartyListItem from "./MyPartyList/MyPartyListItem"

function Index() {
  return (
    <Container fluid className="d-flex flex-column vh-100">
      {/* Navbar */}
      <Row>
        <Navbar />
      </Row>

      <Row className="flex-grow-1">
        <Col xs={6} md={4} lg={3} className="p-0 pt-4 border-end border-1">
          <h3 className="ms-4 mb-4 fw-bold">나의 파티</h3>
          {/* My Party List */}
          <MyPartyList className="mt-3" defaultActiveKey="#link1">
            <MyPartyListItem action href="#link1" name="파티이름" content="내용" date={new Date()} />
            <MyPartyListItem action href="#link2" disabled name="파티이름" content="내용" date={new Date()} />
            <MyPartyListItem action name="파티이름" content="내용" date={new Date()} bubblecount={28} />
          </MyPartyList>
        </Col>

        <Col className="pt-4">
          <h3 className="ms-4 mb-4 fw-bold">지금 구하고 있어요</h3>
          <PartyCardGroup className="p-0">
            <PartyCard />
            <PartyCard />
            <PartyCard />
            <PartyCard
              name={"Dolore magna aliqua"}
              content={"Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."}
              date={new Date()}
            />
            <PartyCard
              name={"Dolore magna aliqua"}
              content={"Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."}
              date={new Date()}
            />
            <PartyCard
              name={"Dolore magna aliqua"}
              content={"Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."}
              date={new Date()}
            />
            <PartyCard
              name={"Dolore magna aliqua"}
              content={"Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."}
              date={new Date()}
            />
            <PartyCard
              name={"Dolore magna aliqua"}
              content={"Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."}
              date={new Date()}
            />
            <PartyCard
              name={"Dolore magna aliqua"}
              content={"Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."}
              date={new Date()}
            />
          </PartyCardGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Index
