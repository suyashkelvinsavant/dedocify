import React from "react";
import { Card } from "react-bootstrap";
import AboutOurService from "../AboutOurService/AboutOurService";
import logo from "../images/logo.png";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Card className="HomePage__container" style={{
        backgroundColor: "#212529",
        color: "white",
        height: "66vh",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0",
        borderBottom: "0",
      }}>
        <img src={logo} alt="logo" style={{
          height: "33vh",
          minWidth: "28vw",
        }} />
        <Card.Text className="text-muted">
          We provide you safe place for your health reports using IPFS, You can also DOWNLOAD, SHARE and Manage your data safe.
        </Card.Text>
      </Card>
      <AboutOurService />
    </div>
  );
};

export default HomePage;
