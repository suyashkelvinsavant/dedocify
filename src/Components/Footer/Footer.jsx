import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";
import { HashLink as Link } from 'react-router-hash-link';
import logo from "../images/logo.png"

const Footer = () => {
  const googlePlusClicked = () => {
    window.open("https://www.google.com/");
  };

  return (
    <div id="footer" className="footer">
      {/* <!-- Footer --> */}
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "rgb(33 37 41)" }}
      >
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-0">
          {/* <!-- Section: Links --> */}
          <section className="">
            {/* <!--Grid row--> */}
            <div className="row"
              style={{ width: "auto", }}
            >
              {/* <!-- Grid column --> */}
              <div className="mx-auto mt-3" style={{width: "fit-content", }}>
                {/* <h6 className="text-uppercase mb-4 font-weight-bold">
                  MediLock
                </h6> */}
                <img src={logo} alt="logo" style={{
                  height: "30vh",
                  minWidth: "16vw",
                }} />
              </div>
              {/* <!-- Grid column --> */}

              <hr className="w-100 clearfix d-md-none" />

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Our World
                </h6>
                <p>
                  <i className="bi footer__icon bi-house-door"></i>
                  <Link className="footer__links" to="/">Home</Link>
                </p>
                <p>
                  <i className="bi footer__icon bi-people-fill"></i>
                  <Link className="footer__links" to="/about-team">About Us</Link>
                </p>
                <p>
                  <i className="bi footer__icon bi-briefcase"></i>
                  <Link className="footer__links" to="#footer">Hire Our Team</Link>
                </p>
                <p>
                  <i className="bi footer__icon bi-pencil"></i>
                  <Link className="footer__links" to="#footer">Feedback</Link>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              <hr className="w-100 clearfix d-md-none" />

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Assitance
                </h6>
                <p>
                  <i className="bi footer__icon bi-shield-check"></i>
                  <Link className="footer__links" to="/privacy">Privacy Policy</Link>
                </p>
                <p>
                  <i className="bi footer__icon bi-file-text-fill"></i>
                  <Link className="footer__links" to="/terms">Terms And Conditions</Link>
                </p>
              </div>

              {/* <!-- Grid column --> */}
              <hr className="w-100 clearfix d-md-none" />

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Get In Touch...
                </h6>
                <p>
                  <i className="bi footer__icon bi-house-heart"></i> Gyan Ganga
                  Institute of Technology and Sciences, Jabalpur
                </p>
                <p>
                  <i className="bi footer__icon bi-envelope-check"></i>{" "}
                  saurabh.sen.cs19@ggits.net
                </p>
                <p>
                  <i className="bi footer__icon bi-telephone-outbound"></i> +91 8305781500
                </p>
                {/* <p>
                  <i className="bi footer__icon bi-three-dots-vertical"></i> + 01 234 567 89
                </p> */}
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!--Grid row--> */}
          </section>
          {/* <!-- Section: Links --> */}

          <hr className="my-3" />

          {/* <!-- Section: Copyright --> */}
          {/* <!-- Footer --> */}
          <footer
            className="text-center text-white"
            style={{ backgroundColor: "rgb(33 37 41)" }}
          >
            {/* <!-- Grid container --> */}
            <div className="container">
              {/* <!-- Section: Text --> */}
              <section className="mb-5">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-8">
                    <p>
                      Team MEDILOCK provides the solution for the real world problem with best UI/UX designs and optimized backend technologies. We choose technologies which are at top of the market for best user experience.
                    </p>
                  </div>
                </div>
              </section>
              {/* <!-- Section: Text --> */}

              {/* <!-- Section: Social --> */}
              <section className="text-center mb-5">
                <button
                  className="btn btn-primary btn-floating m-1 text-white me-4 footer__social__links"
                  onClick={googlePlusClicked}
                >
                  <i className="bi footer__icon bi-facebook"></i>
                </button>
                <button
                  className="btn btn-primary btn-floating m-1 text-white me-4 footer__social__links"
                  onClick={googlePlusClicked}
                >
                  <i className="bi footer__icon bi-twitter"></i>
                </button>
                <button
                  className="btn btn-primary btn-floating m-1 text-white me-4 footer__social__links"
                  onClick={googlePlusClicked}
                >
                  <i className="bi footer__icon bi-instagram"></i>
                </button>
                <button
                  className="btn btn-primary btn-floating m-1 text-white me-4 footer__social__links"
                  onClick={googlePlusClicked}
                >
                  <i className="bi footer__icon bi-github"></i>
                </button>
                <button
                  className="btn btn-primary btn-floating m-1 text-white me-4 footer__social__links"
                  onClick={googlePlusClicked}
                >
                  <i className="bi footer__icon bi-linkedin"></i>
                </button>
              </section>
              {/* <!-- Section: Social --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              © 2020 Copyright:
              <Link className="text-white" to="/">
                {" "}Medilock.com
              </Link>
            </div>
            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              Developed with 💖 by team MEDILOCK.
            </div>
            {/* <!-- Copyright --> */}
          </footer>
          {/* <!-- Footer --> */}
          {/* <!-- Section: Copyright --> */}
        </div>
        {/* <!-- Grid container --> */}
      </footer>
      {/* <!-- Footer --> */}
    </div>
  );
};

export default Footer;
