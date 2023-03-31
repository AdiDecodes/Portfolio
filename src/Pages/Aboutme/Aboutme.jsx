import "./main.css";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import resume from "../../assets/Resume.pdf";
import img from "../../assets/img.jpeg";

const Aboutme = () => {
  useEffect(() => {
    AOS.init({ delay: 1000, duration: 1000 });
    window.scrollTo(0, 10);
  }, []);

  const viewCV = () => {
    window.open(resume);
  };

  return (
    <>
      <div transition-style="in:circle:hesitate">
        <Header title="aboutme" />
        <div className="about-me">
          <div
            className="ab-leftheading"
            data-aos="fade-up"
            data-aos-once="true"
          >
            About Me
          </div>
          <div className="profile-container">
            <div
              className="profile-card"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <img
                onContextMenu={(e) => {
                  e.preventDefault();
                }}
                onSelectStart={(e) => {
                  e.preventDefault();
                }}
                onDragStart={(e) => {
                  e.preventDefault();
                }}
                src={img}
                alt="profile"
              />
            </div>
            <div className="profile-container-right" data-aos="fade-up">
              <h4>ADITYA SINGH</h4>
              <h4>B.E Data Science | Programming Enthusiast | Web developer</h4>
            </div>
          </div>
          <div className="ab-des" data-aos="fade-up" data-aos-once="true">
            Hi there! My name is <span>Aditya Singh</span> <br />A learning{" "}
            <span>Data Scientist</span> having some skills in the particular
            field. Along with that, I have interest in web development with a
            passion for creating visually stunning and intuitive websites. I
            have a strong background in <span>Javascript</span> & its library
            and have experience working in different projects for different
            needs. Outside of my professional work, I am constantly learning and
            staying up-to-date with the latest <span>web development</span>{" "}
            trends and technologies. In my free time, you can find me tinkering
            with new frameworks and tools, or collaborating with fellow
            developers on <span>open source projects</span> . I am excited to
            bring my skills and experience to new challenges and am always
            looking for opportunities to collaborate and create amazing
            websites.
          </div>
          <div
            className="title"
            style={{ color: "white" }}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="50"
          >
            SKILLS
          </div>
          <div className="skill-icons" data-aos-once="true">
            <div
              className="rounded-card"
              title="ReactJS"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <FaReact className="icon" />
            </div>
            <div
              className="rounded-card"
              title="NextJS"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <TbBrandNextjs className="icon" />
            </div>
            <div
              className="rounded-card"
              title="Java"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <FaJava className="icon" />
            </div>
            <div
              className="rounded-card"
              title="MongoDB"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <DiMongodb className="icon" />
            </div>
            <div
              className="rounded-card"
              title="HTML"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <IoLogoHtml5 className="icon" />
            </div>
            <div
              className="rounded-card"
              title="CSS"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <IoLogoCss3 className="icon" />
            </div>
            <div
              className="rounded-card"
              title="Javascript"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-once="true"
            >
              <IoLogoJavascript className="icon" />
            </div>
          </div>
          <div
            className="cv-section"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <div className="heading-title">Wanna read everything in short?</div>
            <div className="heading-cv" onClick={viewCV}>
              View CV
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Aboutme;
