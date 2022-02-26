import React from "react";
import Navb from "../Navbar/Navb";
import Footer from "../Footer/Footer";
import "./Pricing.css";
const Pricing = () => {
  return (
    <div>
      <Navb />
      <div
        className="pricing"
        style={{
          backgroundColor: "#212529",
          color: "white",
        }}
      >
        <section>
          <h1 className="membership">Monthly Membership</h1>

          <div class="container-fluid">
            <div class="container">
              <div class="row">
                <div class="col-sm-4">
                  <div class="pricing-card text-center">
                    <div class="pricing-title">
                      <i class="fa fa-paper-plane" aria-hidden="true"></i>
                      <h2>Basic</h2>
                    </div>
                    <div class="price">
                      <h4>
                        <sup>$</sup>5
                      </h4>
                    </div>
                    <div class="pricing-option">
                      <ul>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i> 3
                          Document Storage{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i> 3
                          Document Updation{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i> 3
                          Document Sharing{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-times" aria-hidden="true"></i> Live
                          Support{" "}
                        </li>
                      </ul>
                    </div>
                    <a href="#">Order Now </a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="pricing-card text-center">
                    <div class="pricing-title">
                      <i class="fa fa-plane" aria-hidden="true"></i>
                      <h2>Standard</h2>
                    </div>
                    <div class="price">
                      <h4>
                        <sup>$</sup>30
                      </h4>
                    </div>
                    <div class="pricing-option">
                      <ul>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i> 20
                          Document Storage{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i> 20
                          Document Updation{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i> 20
                          Document Sharing{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-times" aria-hidden="true"></i> Live
                          Support{" "}
                        </li>
                      </ul>
                    </div>
                    <a href="#">Order Now </a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="pricing-card text-center">
                    <div class="pricing-title">
                      <i class="fa fa-rocket" aria-hidden="true"></i>
                      <h2>Premium</h2>
                    </div>
                    <div class="price">
                      <h4>
                        <sup>$</sup>50
                      </h4>
                    </div>
                    <div class="pricing-option">
                      <ul>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          Unlimited Storage{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          Unlimited Updation{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          Unlimited Sharing{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i> Live
                          Support{" "}
                        </li>
                      </ul>
                    </div>
                    <a href="#">Order Now </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
