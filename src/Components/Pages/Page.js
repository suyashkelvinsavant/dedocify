import React from "react";
import Navb from "../Navbar/Navb";
import Footer from "../Footer/Footer";
import HomePage from "../HomePage/HomePage.jsx";
import ScrollToTop from "../ScrollToTop/ScrollToTop";


function Page() {
  return (
    <>
      <Navb />
      <div className="page__container">
        <HomePage />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Page;
