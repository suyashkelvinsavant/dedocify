import React from 'react'
import { Button } from 'react-bootstrap';
import "./AccountButton.css";

const AccountButton = ({ state, setState, setCid, setEkey, setFiles }) => {

    function disconnect() {
        setState({ connected: false, address: "", key: "" });
    }

    let accounts;
    const connect = async () => {
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
    const Login = () => {
        if (window.ethereum) {
            if (state.connected) {
                return (
                    <Button className="accountBtn" onClick={() => disconnect()} >Get Account Out</Button>
                );
            } else {
                return (
                    <Button className="accountBtn" onClick={async () => connect()} >Get Account In</Button>
                );
            }
        } else {
            return <div>Metamask Not Installed</div>;
        }
    }
    return (
        <div className='account' style={{
            position: "fixed",
            top: "10vh",
            right: "2vw",
            zIndex: "1"
        }}>
            <Login />
        </div>
    )
}

export default AccountButton