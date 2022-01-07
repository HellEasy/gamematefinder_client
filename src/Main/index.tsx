import { useState } from "react"
import { Carousel, Col, Container, Row, Table } from "react-bootstrap"
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
import { FaUser } from "react-icons/fa"
import { FiMoreHorizontal, FiSearch } from "react-icons/fi"
import { GiPartyHat } from "react-icons/gi"
import Logo512 from "../img/logo512.png"
import Navbar from "./Navbar"
import { SideBar, SideBarItem } from "./Sidebar"
import MyParty from "./Sidebar/MyParty"
import SearchBar from "./Sidebar/Search"

function Index() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex: number, e: Record<string, unknown> | null) => {
    setIndex(selectedIndex)
  }

  const TableRow = () => {
    return (
      <tr>
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
        <td className="align-middle">{}</td>
        <td className="align-middle">3/5</td>
        <td className="align-middle">
          <button className="m-1 btn btn-light btn-sm">
            <small>POPULAR</small>
          </button>
          <button className="m-1 btn btn-light btn-sm">
            <small>NEW</small>
          </button>
          <button className="m-1 btn btn-light btn-sm">
            <small>JOB</small>
          </button>
        </td>
        <td className="align-middle">09 SEP 2017</td>
        <td className="align-middle text-center">
          <FiMoreHorizontal />
        </td>
      </tr>
    )
  }

  return (
    <Container fluid className="d-flex flex-column vh-100">
      {/* Navbar */}
      <Row>
        <Navbar />
      </Row>

      {/* Main */}
      <Row>
        <Container className="p-0 d-flex">
          {/* SIDEBAR */}
          <SideBar>
            <SideBarItem icon={<GiPartyHat size={20} />} children={<MyParty />} />
            <SideBarItem icon={<FiSearch size={20} />} children={<SearchBar />} />
          </SideBar>
          <Container fluid className="py-4 px-2">
            <h3 className="ms-4 mb-4 fw-bold">지금 구하고 있어요</h3>
            {/* Carousel */}
            <Container fluid className="p-0 text-center mb-5">
              <Carousel activeIndex={index} onSelect={handleSelect} className="w-50 d-inline-block">
                <Carousel.Item>
                  <img className="d-block w-100" src="https://picsum.photos/361/180" alt="First slide" />
                  <Carousel.Caption>
                    <h3>Dolore magna aliqua</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src="https://picsum.photos/360/180" alt="Second slide" />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src="https://picsum.photos/360/181" alt="Third slide" />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Container>
            {/* List */}
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
                    <th className="fw-lighter" style={{ fontSize: "10px" }}>
                      BASIC INFO
                    </th>
                    <th className="fw-lighter" style={{ fontSize: "10px" }}>
                      파티장
                    </th>
                    <th className="fw-lighter" style={{ fontSize: "10px" }}>
                      CURRENT MEMBER
                    </th>
                    <th className="fw-lighter" style={{ fontSize: "10px" }}>
                      TAGS
                    </th>
                    <th className="fw-lighter" style={{ fontSize: "10px" }}>
                      CREATED DATE
                    </th>
                    <th className="fw-lighter text-center" style={{ fontSize: "10px" }}>
                      더보기
                    </th>
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
            {/* FOOTER */}
            <Container fluid className="my-5">
              <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                  <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <img src={Logo512} alt="GameMateFinder Logo" width={32} height={32} />
                  </a>
                  <span className="text-muted">© 2021 Company, Inc</span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                  <li className="ms-3">
                    <a className="text-muted" href="#">
                      <BsTwitter size={24} />
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="text-muted" href="#">
                      <BsInstagram size={24} />
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="text-muted" href="#">
                      <BsFacebook size={24} />
                    </a>
                  </li>
                </ul>
              </footer>
            </Container>
          </Container>
        </Container>
      </Row>
    </Container>
  )
}

export default Index
