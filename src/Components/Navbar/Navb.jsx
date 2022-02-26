import React from "react";
import "./Navb.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { HashLink as Link } from 'react-router-hash-link';

const Navb = () => {
  return (
    <section className="menuu menu--circle">
      <input type="checkbox" id="menu__active" />
      <label htmlFor="menu__active" className="menu__active">
        <div className="menu__toggle">
          <div className="iconn">
            <div className="hamburgerr"></div>
          </div>
        </div>
        <input type="radio" name="arrow--up" id="degree--up-0" />
        <input type="radio" name="arrow--up" id="degree--up-1" />
        <input type="radio" name="arrow--up" id="degree--up-2" />
        <div className="menu__listings">
          <ul className="circlee">
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <Link to="/" className="buttonn">
                    <i className="bi bi-house-heart-fill"></i>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <Link to="/about-team" className="buttonn">
                    <i className="bi bi-person-hearts"></i>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <Link smooth to="#AboutOurService">
                    <i className="bi bi-hdd-stack"></i>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <Link to="/pricing" className="buttonn">
                    <i className="bi bi-currency-dollar"></i>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <Link to="#footer" className="buttonn">
                    <i className="bi bi-telephone-outbound"></i>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <Link to="/about-team" className="buttonn">
                    <i className="bi bi-person-hearts"></i>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <Link to="#AboutOurService" className="buttonn">
                    <i className="bi bi-hdd-stack"></i>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <Link to="#footer" className="buttonn">
                    <i className="bi bi-pencil"></i>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <Link to="/" className="buttonn">
                    <i className="bi bi-house-heart"></i>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="placeholderr">
                <div className="upsidee">
                  <Link to="/pricing" className="buttonn">
                    <i className="bi bi-currency-dollar"></i>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="menu__arrow menu__arrow--top">
          <ul>
            <li>
              <label htmlFor="degree--up-0">
                <div className="arroww"></div>
              </label>
              <label htmlFor="degree--up-1">
                <div className="arroww"></div>
              </label>
              <label htmlFor="degree--up-2">
                <div className="arroww"></div>
              </label>
            </li>
          </ul>
        </div>
      </label>
    </section>
  );
};

export default Navb;
