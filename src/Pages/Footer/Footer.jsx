import React, { useEffect } from "react";
import "./main.css";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
import { VscHeartFilled } from "react-icons/vsc";

const Footer = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className="footer">
        <div className="innerdiv">
          <div className="container-footer">
            <div className="text">Having Any Project in Mind?</div>
            <div
              onClick={() => {
                navigate("/contact");
              }}
              className="push-button"
            >
              Drop a 'Hello'
            </div>
          </div>
          <div className="Innerright">
            <div className="social">
              <a href="https://instagram.com/_.adityyaa" target="!blank">
                <div className="social-icon">
                  <AiOutlineInstagram size="3rem" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/singhaditya18/"
                target="!blank"
              >
                <div className="social-icon">
                  <AiOutlineLinkedin size="3rem" />
                </div>
              </a>
              <a href="https://github.com/AdiDecodes" target="!blank">
                <div className="social-icon">
                  <AiOutlineGithub size="3rem" />
                </div>
              </a>
            </div>
            <div className="Footertitle">
              Made with <VscHeartFilled color="red" size="22" /> By Aditya
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
