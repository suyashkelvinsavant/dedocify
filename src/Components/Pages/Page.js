import React from "react";
import Footer from "../Footer/Footer";
import Navb from "../Navbar/Navb";
import Home from "./Home/Home";

function Page() {
  return (
    <>
      <Navb />
      <div className="page__container">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default Page;
