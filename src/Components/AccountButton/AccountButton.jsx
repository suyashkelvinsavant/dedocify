import React from 'react'
import { Button } from 'react-bootstrap';
import "./AccountButton.css";

const AccountButton = ({ state, setstate, setCid, setEkey, setFiles }) => {
    const disconnect = () => {
        setstate({ connected: false, address: "", key: "" });
    }

    let accounts;
    const connect = async () => {
        accounts = await window.ethereum
            .request({ method: "eth_requestAccounts" })
            .catch((err) => {
                console.log(err.code);
            });
        setstate({ connected: true, address: accounts[0] });
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
    const Login = () => {
        if (window.ethereum) {
            if (state.connected) {
                return (
                    //   <i className="bi bi-box-arrow-right" onClick={() => disconnect()}></i>
                    <Button className="accountBtn" onClick={() => disconnect()} >Get Account Out</Button>
                );
            } else {
                return (
                    //   <i
                    //     className="bi bi-box-arrow-in-left"
                    //     onClick={async () => connect()}
                    //   ></i>
                    <Button className="accountBtn" onClick={async () => connect()} >Get Account In</Button>
                );
            }
        } else {
            return <div>Metamask Not Installed</div>;
        }
    }
    return (
        <div className='account' style={{position: "fixed",
            top: "65px",
            right: "19px",
            zIndex: "1"}}>
            <Login />
            {/* <Button
                type="button"
                className="btn btn-floating btn-lg"
                id="btn-back-to-top"
                onClick={}
                style={{
                    position: "fixed",
                    bottom: "50px",
                    right: "50px",
                    display: visible ? 'inline' : 'none',
                    backgroundColor: "#212529",
                    border: "1px solid #32efe7",
                    borderRadius: "50%",
                }}
            >
            </Button> */}
        </div>
    )
}

export default AccountButton