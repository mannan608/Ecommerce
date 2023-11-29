import React from "react";
import { Link } from "react-router-dom";
import Images from "../../Images";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div class="footer-wrapper">
        <div class="container-fluid">
          <div class="footer d-flex flex-column">
            <div class="footer-top d-flex justify-content-between align-items-center">
              <div class="company-icon">
                <img src={Images.logo} alt="" />
              </div>
              <div class="important-link d-flex gap-4">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="about.html">Contact</a>
              </div>
              <div class="socila-media">
                <div class="icons d-flex align-items-center gap-3">
                  <Link>
                    <div class="circles facebook">
                      <img src={Images.fbFooter} alt="" class="w-auto h-auto" />
                    </div>
                  </Link>

                  <Link>
                    <div class="circles instragram">
                      <img
                        src={Images.insFooter}
                        alt=""
                        class="w-auto h-auto"
                      />
                    </div>
                  </Link>

                  <Link>
                    <div class="circles tiktok">
                      <img
                        src={Images.tiktokFooter}
                        alt=""
                        class="w-auto h-auto"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="footer-bottom d-flex justify-content-center align-items-center">
              <p> © 2020 - 2023 Iconic Style . All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
