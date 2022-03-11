import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import "./Navb.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Navb({ state, setstate,  setCid, setEkey, setFiles, setPage }) {
  const getCidData = async (cid) => {
    if (typeof cid !== 'undefined') {
        let resp = await fetch("https://gateway.pinata.cloud/ipfs/" + cid);
        if (resp.status >= 200 && resp.status <= 299) {
            return await resp.json()
        } else {
            let resp2 = await fetch("https://" + cid + ".ipfs.infura-ipfs.io/")
            if (resp2.status >= 200 && resp2.status <= 299) {
                return await resp2.json()
            } else {
                let resp3 = await fetch("https://ipfs.io/ipfs/" + cid)
                if (resp3.status >= 200 && resp3.status <= 299) {
                    return await resp3.json()
                } else {
                    console.log("Unable to get CID")
                    return 0;
                }
            }
        }
    } else {
        console.log("Error: CID not defined")
    }
}
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
        let user_data = await getCidData(cid)
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
          // <p to="#" className="Linkn">
          //   <i
          //     className="bi bi-box-arrow-right"
          //     onClick={() => disconnect()}
          //   ></i>
          // </p>
          <Button onClick={() => disconnect()} >Disconnect</Button>
        );
      }
      else {
        return (
          // <p to="#" className="Linkn">
          //   <i
          //     className="bi bi-box-arrow-in-left"
          //     onClick={async () => connect()}
          //   ></i>
          // </p>
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
    <>
    {/* <section className="menuu menu--circle">
      <input type="checkbox" id="menu__active" />
      <label htmlFor="menu__active" className="menu__active">
        <div className="menu__toggle">
          <div className="iconn">
            <div className="hamburgerr"></div>
          </div>
        </div>
        <input type="radio" name="arrow--up" id="degree--up-0" />
        <input type="radio" name="arrow--up" id="degree--up-1" />
        <input type="radio" name="arrow--up" id="degree--up-2" />
        <div className="menu__listings">
          <ul className="circlee">
            <li>
              <div className="placeholderr">
                <div className="upsidee"> */}
                  {/* <Link to="/" className="Linkn"> */}
                  {/* </Link> */}
                  {/* <i className="bi bi-box-arrow-in-left"></i> */}
                  {/* <Login />
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <p  className="Linkn">
                    <i onClick={()=>{setPage('about')}} className="bi bi-person-hearts"></i>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <p to="#AboutOurService">
                    <i className="bi bi-hdd-stack"></i>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <p to="/pricing" className="Linkn">
                    <i className="bi bi-currency-dollar"></i>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <p to="#footer" className="Linkn">
                    <i className="bi bi-telephone-outbound"></i>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <p to="/about-team" className="Linkn">
                    <i className="bi bi-person-hearts"></i>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <p to="#AboutOurService" className="Linkn">
                    <i className="bi bi-hdd-stack"></i>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <p to="#footer" className="Linkn">
                    <i className="bi bi-pencil"></i>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <p to="/" className="Linkn">
                    <i className="bi bi-house-heart"></i>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <p to="/pricing" className="Linkn">
                    <i className="bi bi-currency-dollar" onClick={()=>setPage('pricing')}></i>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="menu__arrow menu__arrow--top">
          <ul>
            <li>
              <label htmlFor="degree--up-0">
                <div className="arroww"></div>
              </label>
              <label htmlFor="degree--up-1">
                <div className="arroww"></div>
              </label>
              <label htmlFor="degree--up-2">
                <div className="arroww"></div>
              </label>
            </li>
          </ul>
        </div>
      </label>
    </section> */}
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={()=>setPage("home")} style={{cursor:'pointer'}}>MediLock</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-center">
            <Nav.Link onClick={()=>setPage("pricing")}>Pricing</Nav.Link>
            <Nav.Link onClick={()=>setPage("about")}>About</Nav.Link>
          </Nav>
          <Login />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}