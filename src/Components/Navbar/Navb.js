import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { ethers } from 'ethers';

export default function Navb({state, setstate}) {
  
  function disconnect(){
    setstate({connected:false, address:""});
  }

  async function connect(){
      try{
        await window.ethereum.send("eth_requestAccounts");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setstate({connected:true, address: address})
      }catch (err) {

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