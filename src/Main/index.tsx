import { useEffect, useState } from "react"
import { Button, Col, Container, Form, InputGroup, Nav, Offcanvas, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import PartyCardGroup from "./PartyCardGrid/PartyCardGroup"
import MyPartyList from "./MyPartyList/MyPartyList"
import PartyCard from "./PartyCardGrid/PartyCard"
import Navbar from "./Navbar"
import MyPartyListItem from "./MyPartyList/MyPartyListItem"
import { FiSearch, FiSettings } from "react-icons/fi"
import { GiPartyHat } from "react-icons/gi"
import "./index.scss"

function Index() {
  const [sidebarSelected, setSidebarSelected] = useState<boolean[]>([false, false])
  const toggleSidebar = (idx: number) => {
    const newSidebarSelected = new Array(sidebarSelected.length).fill(false);
    if (sidebarSelected[idx]) newSidebarSelected[idx] = false
    else newSidebarSelected[idx] = true
    setSidebarSelected(newSidebarSelected)
  }

  const MyParty = () => <>
    <h3 className="m-4 fw-bold">나의 파티</h3>
    {/* My Party List */}
    <MyPartyList className="mt-3" defaultActiveKey="#link1">
      <MyPartyListItem action href="#link1" name="파티이름" content="내용" date={new Date()} />
      <MyPartyListItem action href="#link2" disabled name="파티이름" content="내용" date={new Date()} />
      <MyPartyListItem action name="파티이름" content="내용" date={new Date()} bubblecount={28} />
    </MyPartyList>
  </>

  const [searchPositionValue, setSearchPositionValue] = useState<number[]>([]);
  const handleChange = (val: number[]) => setSearchPositionValue(val);
  const SearchBar = () => <>
    <h3 className="m-4 fw-bold">검색하기</h3>
    <Row className="m-2">
      <Form.Label className="fw-bold">희망 포지션</Form.Label>
      <ToggleButtonGroup className="p-0" type="checkbox" size="sm" value={searchPositionValue} onChange={handleChange}>
        <ToggleButton id="tbg-btn-1" value={1} variant="outline-primary">
          탑
        </ToggleButton>
        <ToggleButton id="tbg-btn-2" value={2} variant="outline-primary">
          미드
        </ToggleButton>
        <ToggleButton id="tbg-btn-3" value={3} variant="outline-primary">
          정글
        </ToggleButton>
        <ToggleButton id="tbg-btn-4" value={4} variant="outline-primary">
          원딜
        </ToggleButton>
        <ToggleButton id="tbg-btn-5" value={5} variant="outline-primary">
          서포터
        </ToggleButton>
      </ToggleButtonGroup>
    </Row>

    <Row className="m-2">
      <Form.Label className="fw-bold">희망 모드</Form.Label>
      <Form.Select aria-label="Default select example">
        <option>Select...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </Row>

    <Row className="m-2">
      <Form.Label className="fw-bold">희망 티어</Form.Label>
      <Form.Select aria-label="Default select example">
        <option>Select...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </Row>

    <Row className="m-2 mt-3">
      <InputGroup className="p-0">
        <Form.Control type="text" placeholder="Search" />
        <Button variant="outline-secondary" id="button-addon2">
          <FiSearch />
        </Button>
      </InputGroup>
    </Row>
  </>

  return (
    <Container fluid className="d-flex flex-column vh-100">
      {/* Navbar */}
      <Row>
        <Navbar />
      </Row>

      <Row className="flex-grow-1">

        {/* SIDEBAR CONTROL */}
        <div className="d-flex flex-column flex-shrink-0 bg-light p-2" style={{ width: "4.5rem" }}>
          <Nav variant="pills" className="nav-flush flex-column mb-auto text-center">
            <Nav.Item>
              <Nav.Link className="py-3" eventKey="my-party" active={sidebarSelected[0]} onClick={() => { toggleSidebar(0) }}>
                <GiPartyHat />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="py-3" eventKey="search" active={sidebarSelected[1]} onClick={() => { toggleSidebar(1) }}>
                <FiSearch />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <Container fluid
          className={`m-0 p-0 sidebar ${sidebarSelected[0] ? "sidebar-active" : "sidebar-inactive"}`}>
          <MyParty />
        </Container>

        <Container fluid
          className={`m-0 p-0 sidebar ${sidebarSelected[1] ? "sidebar-active" : "sidebar-inactive"}`}>
          <SearchBar />
        </Container>

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
