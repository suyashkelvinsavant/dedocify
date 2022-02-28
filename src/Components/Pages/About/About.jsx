import React from 'react'
import "./About.css";
import Navb from "../../Navbar/Navb.js";
import Footer from "../../Footer/Footer.jsx";
import hireus from "../../images/hireus.png"
import saurabh from "../../images/Saurabh.png"
import tanishq from "../../images/Tanishq.jpg"
import srashti from "../../images/srashti.jpg"
import suyash from "../../images/shuyash.png"
import vaibhav from "../../images/Vaibhav.jpg"
import sakshi from "../../images/sakshi.jpg"
import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';

const facebookClicked = (url) => {
  window.open(`https://www.facebook.com/${url}`);
};
const instagramClicked = (url) => {
  window.open(`https://www.instagram.com/${url}`);
};

const linkedInClicked = (url) => {
  window.open(`https://www.linkedin.com/in/${url}`);
};

const githubClicked = (url) => {
  window.open(`https://www.github.com/${url}`);
};

function About() {
  return (
    <div className="about">
      <Navb />
      <div className="about__container">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">About Team MediLock</h1>
              <p className="lead text-muted mb-0">
                We are students from Gyan Ganga Institute of Technology and
                Sciences Jabalpur, We are currently pursuing in Computer Science
                And Engineering 6th semester. We overcome with many software
                solutions and this is one of those.
                <br /> This Web-Application
                developed using React.js, MetaMask wallet Authentication, piniata and ipfs. Our Team developed world's first health report encrypted file locker in terms of WEB3.0
              </p>
              <p className="lead text-muted">
                We put our hardwork and best knowledge to make this world better with 💖{" "}
                <Link to="/" className="text-muted">
                  <u className="text-light">MediLock</u>
                </Link>
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="hr__line" />

      <div className="bg-dark">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="far fa-chart-bar fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">
                Who are we?
              </h2>
              <p className="font-italic text-muted mb-4">
                All of our team members are the students from Gyan Ganga Institute of Technology and Sciences Jabalpur. <br />
                We have 6 team members, two of us are Females. Our team loves to work on real world problems and always we try to give our 100%.
              </p>
              <Link
                to="#footer"
                className="btn btn-black px-5 rounded-pill shadow-sm"
              >
                Have a meet??
              </Link>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src={hireus}
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img
                src="https://cdni.iconscout.com/illustration/free/thumb/sales-team-2043015-1730192.png"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">What we work on🤫?</h2>
              <p className="font-italic text-muted mb-4">
                We develop light weight application using the latest Technology. There is no need of external
                mobile compatible application since our Web-Applications are
                Mobile responsive and small screen size compatible.
                <br />
                We put our best knowledge of various technologies such as, HTML, CSS, BOOTSTRAP-5.0, TAILWIND CSS V3.0, MATERIAL-UI, ANTDESIGN, JAVASCRIPT, REACT.JS, NODE.JS, EXPRESS.JS, FLASK, MONGODB-ATLAS, FIREBASE-V9.0, SANITY, FIREBASE AUTHENTICATION(Phone no, Email and Anonymous), METAMASK WALLET AUTHENTICATION.
              </p>
              <Link
                to="/contact"
                className="btn btn-black px-5 rounded-pill shadow-sm"
              >
                Hire Us!
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="hr__line" />

      <div className="bg-dark py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light">Our team</h2>
              <p className="font-italic text-muted">Put Knowledge In Real World.</p>
            </div>
          </div>

          <div className="row justify-content-center text-center">
            {/* Team item */}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-dark rounded shadow-sm py-5 px-4 team__box">
                <img
                  src={saurabh}
                  alt="saurabh"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-2">Saurabh Sen</h5>
                <h6 className="mb-2">Web-Developer</h6>
                <span className="speciality small text-uppercase text-muted">
                  Speciality in Designing amazing websites with optimized backend logic.
                </span>
                <ul className="social mb-0 list-inline mt-4">
                  <li className="list-inline-item">
                    <button
                      onClick={() => facebookClicked("")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-facebook"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => instagramClicked("")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-instagram"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => linkedInClicked("saurabh-sen-47b200203")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-linkedin"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => githubClicked("saurabh-sen")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-github"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* End */}
            {/* Team item */}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-dark rounded shadow-sm py-5 px-4 team__box">
                <img
                  src={tanishq}
                  alt="tanishq"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-2">Tanishq Banger</h5>
                <h6 className="mb-2">Web-Developer</h6>
                <span className="speciality small text-uppercase text-muted">
                  Speciality in UI with NEXT. JS Bootstrap.
                </span>
                <ul className="social mb-0 list-inline  mt-5">
                  <li className="list-inline-item">
                    <button
                      onClick={() => facebookClicked("")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-facebook"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => instagramClicked("attacker_of_tt_2222/")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-instagram"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => linkedInClicked("tanishq-banger-6a71221b6/")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-linkedin"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => githubClicked("TanishqBanger")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-github"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* End */}

            {/* Team item */}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-dark rounded shadow-sm py-5 px-4 team__box">
                <img
                  src={srashti}
                  alt="srashti"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-2">Srashti Rai</h5>
                <h6 className="mb-2">Web-Developer</h6>
                <span className="speciality small text-uppercase text-muted">
                  Speciality in UI with Canva, figma and Bootstrap.
                </span>
                <ul className="social mb-0 list-inline  mt-5">
                  <li className="list-inline-item">
                    <button
                      onClick={() => facebookClicked("profile.php?id=100027311282889")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-facebook"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => instagramClicked("__srashti.rai__/")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-instagram"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => linkedInClicked("srashti-rai-a3a006229")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-linkedin"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => githubClicked("srashti1204")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-github"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* End */}
            {/* Team item */}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-dark rounded shadow-sm py-5 px-4 team__box">
                <img
                  src={suyash}
                  alt="suyash"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-2">Suyash Kelvin Savant</h5>
                <h6 className="mb-2">Web-Developer</h6>
                <span className="speciality small text-uppercase text-muted">
                  Speciality in development of optimized backend logic.
                </span>
                <ul className="social mb-0 list-inline  mt-5">
                  <li className="list-inline-item">
                    <button
                      onClick={() => facebookClicked("kelvinator.nft/")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-facebook"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => instagramClicked("suyash_kelvin/")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-instagram"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => linkedInClicked("suyashkelvin/")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-linkedin"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => githubClicked("suyashkelvinsavant")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-github"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* End */}
            {/* Team item */}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-dark rounded shadow-sm py-5 px-4 team__box">
                <img
                  src={vaibhav}
                  alt="vaibhav"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-2">Vaibhav Kushwaha</h5>
                <h6 className="mb-2">Web-Developer</h6>
                <span className="speciality small text-uppercase text-muted">
                  Speciality in development of optimized backend logic and frontend using React .js knowledge.
                </span>
                <ul className="social mb-0 list-inline  mt-5">
                  <li className="list-inline-item">
                    <button
                      onClick={() => facebookClicked("vaibhavk.kushwaha")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-facebook"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => instagramClicked("vaibhav_wolfvk/")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-instagram"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => linkedInClicked("vaibhav-kushwaha-9b2323208")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-linkedin"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => githubClicked("vaibhav-wolfvk")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-github"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* End */}
            {/* Team item */}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-dark rounded shadow-sm py-5 px-4 team__box">
                <img
                  src={sakshi}
                  alt="sakshi"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-2">Sakshi Kushwaha</h5>
                <h6 className="mb-2">Web-Developer</h6>
                <span className="speciality small text-uppercase text-muted">
                  Speciality in development of frontend using Html, css and javascript.
                </span>
                <ul className="social mb-0 list-inline  mt-5">
                  <li className="list-inline-item">
                    <button
                      onClick={() => facebookClicked("profile.php?id=100004807637054")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-facebook"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => instagramClicked("_k_sakshi_")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-instagram"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => linkedInClicked("sakshi-kushwaha-976503215")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-linkedin"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => githubClicked("sakshi-kushwaha")}
                      type="button"
                      className="social-link"
                    >
                      <i className="bi bi-github"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* End */}
          </div>
        </div>
      </div>
      
      <hr className="hr__line" />

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default About