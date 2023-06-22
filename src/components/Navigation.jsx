import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/Logo.png"

export default function Navigation() {
  return (
    <Navbar expand="lg">
      <Container >
        <Navbar.Brand href="/">
          <img
            src={logo}
            height="45"
            alt="Little Lemon Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about-us">About</Nav.Link>
            <Nav.Link href="#">Menu</Nav.Link>
            <Nav.Link href="/booking">Reservations</Nav.Link>
            <Nav.Link href="#">Order Online</Nav.Link>
            <Nav.Link href="#">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
