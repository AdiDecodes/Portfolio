import "./Error.css";
import { Link } from "react-router-dom";
import anmt from "../../assets/404.json";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Error = () => {
  const animationContainer = useRef(null);
  useEffect(() => {
    AOS.init({ delay: 100 });
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: anmt,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <>
      <div className="Error-main">
        <div
          ref={animationContainer}
          data-aos="fade-up"
          data-aos-once="true"
        ></div>
        <div className="subheading" data-aos="fade-up" data-aos-once="true">
          The page you are trying to look doesn't exist or has been deleted!
        </div>
        <Link to="/">
          <div className="back-to-home" data-aos="fade-up" data-aos-once="true">
            Back To Home
          </div>
        </Link>
      </div>
    </>
  );
};

export default Error;
