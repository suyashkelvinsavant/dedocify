import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import {useMoralis, MoralisProvider} from 'react-moralis';
const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

function Navb() {
  function Login() {
    const { authenticate, isAuthenticated, isAuthenticating, logout } = useMoralis();
    if (isAuthenticated) {
        return (
            <Button onClick={() => logout()} >Logout</Button>
        );
    }
    else {
        return (
            <Button onClick={() => authenticate()} disabled={isAuthenticating} >Sign In</Button>
        );
    }

}
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
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
    <Login></Login>
    </MoralisProvider>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Navb;