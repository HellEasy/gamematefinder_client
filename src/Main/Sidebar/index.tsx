import React, { FunctionComponent, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import "./index.scss";

interface SideBarProps {
  children: React.ReactComponentElement<typeof SideBarItem>[]
}

const SideBar: FunctionComponent<SideBarProps> = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState<number | undefined>()
  const toggleItem = (idx: number) => setSelectedItem(idx === selectedItem ? undefined : idx)

  return (<>
    <div className="d-flex flex-column flex-shrink-0 bg-light p-2" style={{ width: "4.5rem" }}>
      <Nav variant="pills" className="nav-flush flex-column mb-auto text-center">
        {children.map((child, index) =>
          <SideBarItem key={index} {...(child.props)}
            active={selectedItem === index}
            onClick={() => toggleItem(index)} />)
        }
      </Nav>
    </div>
    {children.map((child, index) =>
      <Container key={index} fluid
        className={`m-0 p-0 sidebar ${selectedItem === index ? "sidebar-active" : "sidebar-inactive"}`}>
        {child.props.children}
      </Container>
    )}
  </>);

}

interface SideBarItemProps {
  // value: number,
  icon: React.ReactElement,
  children: React.ReactElement,
  active?: boolean,
  onClick?: React.MouseEventHandler<HTMLElement>
}

const SideBarItem = ({ icon, active, onClick }: SideBarItemProps) => {
  return <Nav.Item>
    <Nav.Link className="py-3" active={active} onClick={onClick}>
      {icon}
    </Nav.Link>
  </Nav.Item >;
}

export { SideBar, SideBarItem };
