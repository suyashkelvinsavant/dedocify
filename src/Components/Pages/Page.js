import React from "react";
import Navb from "../Navbar/Navb";
import Footer from "../Footer/Footer";
import HomePage from "../HomePage/HomePage.jsx";

// ! remove jqery library from dependancy
// ! pricing.
// ! add go to top button

function Page() {
  return (
    <>
      <Navb />
      <div className="page__container">
        <HomePage />
      </div>
      <Footer />
    </>
  );
}

export default Page;
