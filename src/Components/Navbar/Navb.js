import { Navbar, Container, Nav, Button } from 'react-bootstrap';

export default function Navb({state, setstate}) {
  
  function disconnect(){
    setstate({connected:false, address:""});
  }
let accounts;
  async function connect(){
    accounts = await window.ethereum.request({method: 'eth_requestAccounts'}).catch((err)=>{
      console.log(err.code);
    })
    if(typeof accounts !== 'undefined'){
      setstate({connected: true, address: accounts[0]})
    }
    }
  function Login() {
    if(window.ethereum){
    
    if (state.connected) {
        return (
            <Button onClick={()=>disconnect()} >Disconnect</Button>
        );
    }
    else {
        return (
            <Button onClick={async()=>connect()} >Connect</Button>
        );
    }
  }else{
    return(
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
    <Login/>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}