import React, { useEffect, useState } from "react";
import "./Work.css";
import cs from "../../assets/cleverstudio.png";
import sb from "../../assets/superbattle.png";
import sc from "../../assets/skycloud.png";
import vz from "../../assets/vidzy.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Work = () => {
  const [project, setProject] = useState([
    {
      id: 1,
      title: "CleverStudio - Media Agency",
      desc: `Cleverstudio is the media agency that helps small businesses or
      Individuals to get digital resources and assets that they
      require in this digital era.`,
      image: cs,
      url: "https://www.cleverstudio.in",
      techUsed: ["HTML", "CSS", "Vanilla JS"],
    },
    {
      id: 2,
      title: "Vidzy - Fast Video Saver",
      desc: `VIDZY is an online video downloading website which allows users
      to download videos from YouTube & Facebook. Supports high quality downloads and can be saved locally`,
      image: vz,
      url: "https://adidecodes.github.io/Vidzy",
      techUsed: ["HTML", "CSS", "Vanilla JS"],
    },
    {
      id: 3,
      title: "SuperBattle - Esports Platform",
      desc: `SuperBattle is an Esports competitive platform that has multiple
      games available to play and compete with other players. Playing
      or participating also ensures that with this gaming skill you
      earn more as you play more!`,
      image: sb,
      url: "https://www.superbattle.in",
      techUsed: ["HTML", "CSS", "Vanilla JS"],
    },
    {
      id: 4,
      title: "Skycloud - Weather Forecast",
      desc: `Skycloud is a website that serves local weather information
      right when and where you want it. With Skycloud, you can see
      current conditions, forecasted temperatures of any city in the
      world. You'll be able to check out your local weather, or find
      out what's the weather!`,
      image: sc,
      url: "https://adidecodes.github.io/Skycloud",
      techUsed: ["HTML", "CSS", "JS", "Bootstrap"],
    },
  ]);

  useEffect(() => {
    AOS.init({ delay: 1000, duration: 500 });
    window.scrollTo(0, 10);
    setTimeout(() => {
      AOS.init({ delay: 200, duration: 500 });
    }, 2000);
  }, []);

  const openLink = (url) => {
    window.open(url, "!blank");
  };

  const childDivs = (arrayList) =>
    arrayList.map((text, index) => (
      <div key={index} className="tech-used">
        {text}
      </div>
    ));

  return (
    <div transition-style="in:circle:hesitate">
      <Header title="project" />
      <div className="work-main">
        <div className="w-heading">Projects</div>
        <div className="work-subheading">
          These are some of the projects I've created, Have A Look!
        </div>
        <div className="mainWork">
          {project.map((proj) => {
            return (
              <div data-aos="fade-up" className="projectDiv" key={proj.id}>
                <div className="imageSec">
                  <img src={proj.image} />
                </div>
                <div className="line"></div>
                <div className="detailsSection">
                  <div className="info">
                    <h2>{proj.title}</h2>
                    <p>{proj.desc}</p>
                  </div>
                  <div className="tech-container">
                    {childDivs(proj.techUsed)}
                  </div>
                  <div
                    className="button-site"
                    onClick={() => openLink(proj.url)}
                  >
                    Visit Site
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Work;
