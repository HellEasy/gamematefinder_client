import { Col, Container, Row, Table } from "react-bootstrap"
import { FaUser } from "react-icons/fa"
import { FiMoreHorizontal, FiSearch } from "react-icons/fi"
import { GiPartyHat } from "react-icons/gi"
import Navbar from "./Navbar"
import PartyCard from "./PartyCardGrid/PartyCard"
import PartyCardGroup from "./PartyCardGrid/PartyCardGroup"
import { SideBar, SideBarItem } from "./Sidebar"
import MyParty from "./Sidebar/MyParty"
import SearchBar from "./Sidebar/Search"

function Index() {
  const TableRow = () => {
    return <tr>
      <td className="align-middle">
        <Row className="px-3 align-items-center">
          <Col className="text-center" xs={"auto"}>
            <FaUser />
          </Col>

          <Col>
            {/* Title */}
            <Row className="fw-bold m-1">{"파티이름"}</Row>
            {/* Content */}
            <Row className="fw-light m-1">
              <small className="p-0">{"파티 info"}</small>
            </Row>
          </Col>
        </Row>
      </td>
      <td className="align-middle">
        { }
      </td>
      <td className="align-middle">3/5</td>
      <td className="align-middle">
        <button className="mx-1 btn btn-light btn-sm"><small>POPULAR</small></button>
        <button className="mx-1 btn btn-light btn-sm"><small>NEW</small></button>
        <button className="mx-1 btn btn-light btn-sm"><small>JOB</small></button>
      </td>
      <td className="align-middle">09 SEP 2017</td>
      <td className="align-middle"><FiMoreHorizontal /></td>
    </tr >
  }

  return (
    <Container fluid className="d-flex flex-column vh-100">
      {/* Navbar */}
      <Row>
        <Navbar />
      </Row>

      <Row className="flex-grow-1">

        {/* SIDEBAR CONTROL */}
        <SideBar>
          <SideBarItem icon={<GiPartyHat />} children={<MyParty />} />
          <SideBarItem icon={<FiSearch />} children={<SearchBar />} />
        </SideBar>

        {/* END OF SIDEBAR CONTROL */}


        <Col className="pt-4 px-5 border-start border-1">
          <Container fluid>
            <h3 className="ms-4 mb-4 fw-bold">지금 구하고 있어요</h3>

            <PartyCardGroup className="p-0 mb-5 ">
              <PartyCard />
              <PartyCard />
              <PartyCard
                name={"Dolore magna aliqua"}
                content={"Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."}
                date={new Date()}
              />
            </PartyCardGroup>
          </Container>

          <Container fluid>
            <Table borderless hover className="p-0 ">
              <colgroup>
                <col span={1} style={{ width: "20%" }} />
                <col span={1} style={{ width: "10%" }} />
                <col span={1} style={{ width: "10%" }} />
                <col span={1} style={{ width: "15%" }} />
                <col span={1} style={{ width: "10%" }} />
                <col span={1} style={{ width: "5%" }} />
              </colgroup>

              <thead>
                <tr>
                  <th className="fw-lighter" style={{ fontSize: "10px" }}>BASIC INFO</th>
                  <th className="fw-lighter" style={{ fontSize: "10px" }}>파티장</th>
                  <th className="fw-lighter" style={{ fontSize: "10px" }}>CURRENT MEMBER</th>
                  <th className="fw-lighter" style={{ fontSize: "10px" }}>TAGS</th>
                  <th className="fw-lighter" style={{ fontSize: "10px" }}>CREATED DATE</th>
                  <th className="fw-lighter" style={{ fontSize: "10px" }}>더보기</th>
                </tr>
              </thead>
              <tbody>
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
              </tbody>
            </Table>
          </Container>

        </Col>

      </Row>

    </Container>
  )
}

export default Index
