import { Navbar, Container, Nav, Button } from 'react-bootstrap';

export default function Navb({ state, setstate,  setCid, setEkey, setFiles }) {

  function disconnect() {
    setstate({ connected: false, address: "", key: "" });
  }
  let accounts;
  async function connect() {
    accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }).catch((err) => {
      console.log(err.code);
    })
    setstate({ connected: true, address: accounts[0] })
    if (typeof accounts !== 'undefined') {
      let response = await fetch('http://localhost:5000/api?address=' + accounts[0])
      let res =await response.json();
      if (typeof res.cid !== 'undefined') {
        let cid = res.cid;
        setCid(cid)
        let resp = await fetch("https://gateway.pinata.cloud/ipfs/" + cid)
        let user_data = await resp.json()
        if (typeof user_data.key !== 'undefined') {
          setEkey(user_data.key)
          setFiles(user_data.files)
        }
      }
    }
  }
  function Login() {
    if (window.ethereum) {

      if (state.connected) {
        return (
          <Button onClick={() => disconnect()} >Disconnect</Button>
        );
      }
      else {
        return (
          <Button onClick={async () => connect()} >Connect</Button>
        );
      }
    } else {
      return (
        <div>Metamask Not Installed</div>
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
          <Login />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}