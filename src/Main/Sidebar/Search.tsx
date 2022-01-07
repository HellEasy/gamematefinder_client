import { useState } from "react"
import { Button, Form, InputGroup, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import { FiSearch } from "react-icons/fi"

const Search = () => {
  const [searchPositionValue, setSearchPositionValue] = useState<number[]>([])
  const handleChange = (val: number[]) => setSearchPositionValue(val)

  return (
    <>
      <h3 className="m-4 fw-bold">검색하기</h3>
      <Row className="m-2">
        <Form.Label className="fw-bold">희망 포지션</Form.Label>
        <ToggleButtonGroup
          className="p-0"
          type="checkbox"
          size="sm"
          value={searchPositionValue}
          onChange={handleChange}
        >
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
  )
}

export default Search
