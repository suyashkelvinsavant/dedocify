import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function Navb() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">DeDocify</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto justify-content-center">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#About">About</Nav.Link>
    </Nav>
    <Button>Sign In</Button>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Navb;