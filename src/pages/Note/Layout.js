import { Outlet } from "react-router-dom";
import "../css/layout.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import {GiNotebook} from "react-icons/gi"
const Layout = () => {
  return (
    <>
      <header>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <GiNotebook size="2em"/>
            <Navbar.Brand href="/">My Note</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="Addnote">Add Note</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Outlet />
    </>
  )
};

export default Layout;