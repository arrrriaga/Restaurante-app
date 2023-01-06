import { Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import LOGO from "../Images/LOGO.png";

function NavbarComponent() {
  const expand = "sm";
  const expand2 = "lg";
  return (
    <>
      <Navbar
        key={expand}
        bg="dark"
        variant="dark"
        expand={expand}
        className="NAV"
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={LOGO} alt="TLALLI" height={50}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand2}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            style={{ width: "30vw", background: "white" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menú
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-1">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/reservar">Reservaciones</Nav.Link>
                <Nav.Link href="/menu">Nuestro menú</Nav.Link>
                <Nav.Link href="/registro">Ver Registro</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
