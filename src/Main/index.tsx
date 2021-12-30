import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FiSearch } from "react-icons/fi"
import { GiPartyHat } from "react-icons/gi"
import "./index.scss"
import Navbar from "./Navbar"
import PartyCard from "./PartyCardGrid/PartyCard"
import PartyCardGroup from "./PartyCardGrid/PartyCardGroup"
import { SideBar, SideBarItem } from "./Sidebar"
import MyParty from "./Sidebar/MyParty"
import SearchBar from "./Sidebar/Search"

function Index() {
  return (
    <Container fluid className="d-flex flex-column vh-100">
      {/* Navbar */}
      <Row>
        <Navbar />
      </Row>

      <Row className="flex-grow-1">

        {/* SIDEBAR CONTROL */}
        <SideBar>
          <SideBarItem value={0} icon={<GiPartyHat />} children={<MyParty />} />
          <SideBarItem value={1} icon={<FiSearch />} children={<SearchBar />} />
        </SideBar>

        {/* END OF SIDEBAR CONTROL */}


        <Col className="pt-4 border-start border-1">
          <Container fluid>
            <h3 className="ms-4 mb-4 fw-bold">지금 구하고 있어요</h3>

            <PartyCardGroup className="p-0">
              <PartyCard />
              <PartyCard />
              <PartyCard
                name={"Dolore magna aliqua"}
                content={"Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."}
                date={new Date()}
              />
            </PartyCardGroup>
          </Container>

          <Row>
            {/* TODO: 게시글 목록 */}
          </Row>

        </Col>

      </Row>

    </Container>
  )
}

export default Index
