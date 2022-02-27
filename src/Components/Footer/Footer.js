import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.scss";
import logo from "../Pages/images/logo.png"
function Footer({setPage}){
    const googlePlusClicked = () => {
        window.open("https://www.google.com/");
      };
    return(
        <div id="footer" className="footer">
      {/* <!-- Footer --> */}
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "rgb(33 37 41)" }}
      >
        {/* <!-- Grid container --> */}
        <div className=" p-4 pb-0">
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
                  height: "25vh",
                  minWidth: "12vw",
                }} />
              </div>
              {/* <!-- Grid column --> */}

              <hr className="w-100 clearfix d-md-none" />

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Our World
                </h6>
                <div >
                  
                  <p onClick={()=>setPage("")} className="footer__links" to="/" ><i className="bi footer__icon bi-house-door"></i>Home</p>
                </div>
                <div>
                  <i className="bi footer__icon bi-people-fill"></i>
                  <p className="footer__links" to="/about-team">About Us</p>
                </div>
                <div>
                  <i className="bi footer__icon bi-briefcase"></i>
                  <p className="footer__links" to="#footer">Hire Our Team</p>
                </div>
                <div>
                  <i className="bi footer__icon bi-pencil"></i>
                  <p className="footer__links" to="#footer">Feedback</p>
                </div>
              </div>
              {/* <!-- Grid column --> */}

              <hr className="w-100 clearfix d-md-none" />

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Assitance
                </h6>
                <div>
                  <i className="bi footer__icon bi-shield-check"></i>
                  <p className="footer__links" to="/privacy">Privacy Policy</p>
                </div>
                <div>
                  <i className="bi footer__icon bi-file-text-fill"></i>
                  <p className="footer__links" to="/terms" onClick={()=>setPage("terms")}>Terms And Conditions</p>
                </div>
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
                  dedocify@gmail.com
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
                  <div className="">
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
              <p className="text-white" to="/">
                {" "}Medilock.com
              </p>
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
}
export default Footer;