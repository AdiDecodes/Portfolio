import React, { useEffect, useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import "./App.css";
import { Typewriter } from "react-simple-typewriter";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import cs from "./assets/cleverstudio.png";
import sb from "./assets/superbattle.png";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    AOS.init({ delay: 1000 });
    window.scrollTo(0, 0);
    setTimeout(() => {
      AOS.init({ delay: 100 });
    }, 2000);
  }, []);

  const aboutText =
    "I am a skilled web developer with expertise in a range of cutting-edge technologies, including Next.js, MongoDB, and Node.js. Through this portfolio, I aim to showcase my abilities in creating performant, responsive, and user-friendly web applications.";

  return (
    <>
      <div transition-style="in:circle:hesitate">
        <div style={{ backgroundColor: "black" }}>
          <Header title="home" />
          <div className="primary">
            <div className="primaryContainer">
              <div
                className="primaryleft"
                data-aos="slide-up"
                data-aos-once="true"
              >
                <div className="pretext">HEY THERE, I AM</div>
                <span className="span-name">
                  <Typewriter
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={100}
                    delaySpeed={1000}
                    words={[
                      "Aditya Singh",
                      "Web developer",
                      "Java Developer",
                      "Programming Enthusiast",
                    ]}
                  />
                </span>
                <div className="about-text">{aboutText}</div>
              </div>
            </div>
          </div>
          <div className="projects">
            <div
              className="heading-project"
              data-aos="slide-up"
              data-aos-once="true"
              data-aos-delay="100"
            >
              PROJECTS
            </div>
            <div
              className="project-section-1"
              data-aos="slide-up"
              data-aos-once="true"
              data-aos-delay="100"
            >
              <img className="proj-img" src={sb} alt="" />
            </div>
            <div
              className="project-section-2"
              data-aos="slide-up"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <img className="proj-img" src={cs} alt="" />
            </div>
            <div
              className="view-all"
              data-aos="slide-up"
              data-aos-once="true"
              onClick={() => {
                navigate("/project");
              }}
            >
              <p>VIEW ALL</p>
              <span className="icon-arrow">
                <BsArrowRight size="2rem" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
