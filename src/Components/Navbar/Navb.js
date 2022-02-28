import React from "react";
import "./Navb.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { HashLink as Link } from "react-router-hash-link";

// login icon in navbar and change it when you connect it
const Navb = ({ state, setState, setCid, setEkey, setFiles }) => {

  function disconnect() {
    setState({ connected: false, address: "", key: "" });
  }

  let accounts;
  async function connect() {
    accounts = await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .catch((err) => {
        console.log(err.code);
      });
    setState({ connected: true, address: accounts[0] });
    if (typeof accounts !== "undefined") {
      let response = await fetch(
        "http://localhost:5000/api?address=" + accounts[0]
      );
      let res = await response.json();
      if (typeof res.cid !== "undefined") {
        let cid = res.cid;
        setCid(cid);
        let resp = await fetch("https://gateway.pinata.cloud/ipfs/" + cid);
        let user_data = await resp.json();
        if (typeof user_data.key !== "undefined") {
          setEkey(user_data.key);
          setFiles(user_data.files);
        }
      }
    }
  }

  function Login() {
    if (window.ethereum) {
      if (state !== undefined && state.connected) {
        // console.log(state);
        // console.log(state.connected);
        return (
          <Link to="#" className="Linkn">
            <i
              className="bi bi-box-arrow-right"
              onClick={() => disconnect()}
            ></i>
          </Link>
        );
      } else {
        return (
          <Link to="#" className="Linkn">
            <i
              className="bi bi-box-arrow-in-left"
              onClick={async () => connect()}
            ></i>
          </Link>
        );
      }
    } else {
      return <div>Metamask Not Installed</div>;
    }
  }

  return (
    <section className="menuu menu--circle">
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
                <div className="upsidee">
                  {/* <Link to="/" className="Linkn"> */}
                  {/* </Link> */}
                  {/* <i className="bi bi-box-arrow-in-left"></i> */}
                  <Login />
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <Link to="/about-team" className="Linkn">
                    <i className="bi bi-person-hearts"></i>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <Link smooth to="#AboutOurService">
                    <i className="bi bi-hdd-stack"></i>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <Link to="/pricing" className="Linkn">
                    <i className="bi bi-currency-dollar"></i>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <Link to="#footer" className="Linkn">
                    <i className="bi bi-telephone-outbound"></i>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <Link to="/about-team" className="Linkn">
                    <i className="bi bi-person-hearts"></i>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <Link to="#AboutOurService" className="Linkn">
                    <i className="bi bi-hdd-stack"></i>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <Link to="#footer" className="Linkn">
                    <i className="bi bi-pencil"></i>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <Link to="/" className="Linkn">
                    <i className="bi bi-house-heart"></i>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <Link to="/pricing" className="Linkn">
                    <i className="bi bi-currency-dollar"></i>
                  </Link>
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
    </section>
  );
};

export default Navb;
