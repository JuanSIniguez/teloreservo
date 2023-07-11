import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const NavBar = () =>{
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">El Faraón</Navbar.Brand>
        
        <Navbar.Collapse className="justify-content-end">
            <Nav>
            <Nav.Link href="#">👩</Nav.Link>
            <Nav.Link eventKey={2} href="#">
              🛁
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};