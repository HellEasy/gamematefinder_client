import React, { FunctionComponent, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import "./index.scss";

interface SideBarProps {
  children: React.ReactComponentElement<typeof SideBarItem>[]
}

const SideBar: FunctionComponent<SideBarProps> = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState<number | undefined>()
  const toggleItem = (idx: number) => setSelectedItem(idx === selectedItem ? undefined : idx)

  return (<div className="d-flex border-end border-1">
    <Nav variant="pills" className="nav-flush flex-column mb-auto text-center bg-light h-100 border-end border-1">
      {children.map((child, index) =>
        <SideBarItem key={index} {...(child.props)}
          active={selectedItem === index}
          onClick={() => toggleItem(index)} />)
      }
    </Nav>

    {children.map((child, index) =>
      <Container key={index} fluid
        className={`m-0 p-0 sidebar ${selectedItem === index ? "sidebar-active" : "sidebar-inactive"}`}>
        {child.props.children}
      </Container>
    )}
  </div>);
}

interface SideBarItemProps {
  icon: React.ReactElement,
  children: React.ReactElement,
  active?: boolean,
  onClick?: React.MouseEventHandler<HTMLElement>
}

const SideBarItem = ({ icon, active, onClick }: SideBarItemProps) => {
  return <Nav.Item className="mx-2 my-1">
    <Nav.Link className="py-3" active={active} onClick={onClick}>
      {icon}
    </Nav.Link>
  </Nav.Item>;
}

export { SideBar, SideBarItem };
