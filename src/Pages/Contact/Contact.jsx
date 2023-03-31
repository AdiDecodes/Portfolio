import "./main.css";
import { BiSend } from "react-icons/bi";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PuffLoader from "react-spinners/PuffLoader";
import Header from "../Header/Header";

const Contact = () => {
  const url = import.meta.env.VITE_URL;
  useEffect(() => {
    AOS.init({ delay: 1000, duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  const toastRef = useRef(null);

  const toastProps = {
    position: "top-right",
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    autoClose: 5000,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const updateToast = (message, success) => {
    if (success == true) {
      toast.update(toastRef.current, {
        hideProgressBar: false,
        type: toast.TYPE.SUCCESS,
        render: message,
        autoClose: 5000,
        closeButton: null,
      });
    } else {
      toast.update(toastRef.current, {
        hideProgressBar: false,
        type: toast.TYPE.ERROR,
        render: message,
        autoClose: 5000,
        closeButton: null,
      });
    }
  };

  const errorMsg = (msg) => {
    toast.error(msg);
  };

  const showToast = (message) => {
    toastRef.current = toast(
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <PuffLoader
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <span style={{ margin: "0 0 0 15px" }}>{message}</span>
      </div>,
      toastProps
    );
  };

  const [isEmail, setMail] = useState(false);

  const resetInputs = () => {
    setData({ name: "", email: "", message: "" });
  };
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = data;

  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setMail(true);
      return true;
    } else {
      setMail(false);
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateEmail(email) && name.length >= 1 && message.length >= 1) {
      try {
        showToast("Sending the message..");
        const response = await axios.post(`https://${url}/`, data);
        if (response.status == 200) {
          updateToast("Message Sent", true);
          resetInputs();
        } else {
          updateToast("Failed to send!", false);
          resetInputs();
        }
      } catch (error) {
        if (error.request) {
          updateToast("Error occured! Try again", false);
          console.log(error);
          resetInputs();
        }
      }
    } else {
      errorMsg("Invalid or Empty Inputs!");
    }
  };

  return (
    <>
      <div style={{ overflow: "hidden" }} transition-style="in:circle:hesitate">
        <Header title="contact" />
        <div className="contact-main">
          <div className="contact-left" data-aos="fade-up" data-aos-once="true">
            <div className="left-socials">
              <div className="social">
                <a href="https://www.instagram.com/_.adityyaa/" target="!blank">
                  <AiOutlineInstagram />
                </a>
              </div>
              <div className="social">
                <a
                  href="https://www.linkedin.com/in/singhaditya18/"
                  target="!blank"
                >
                  <AiOutlineLinkedin />
                </a>
              </div>
              <div className="social">
                <a href="https://github.com/AdiDecodes/" target="!blank">
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
          <div
            className="contact-right"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="form-parent">
              <div className="form-main">
                <div className="innerleft">
                  <div className="inner-heading">
                    Got Idea? We've got <br />
                    the skills. Let's Team Up.
                  </div>
                  <div className="desc">
                    Tell us more about yourself and about the idea.
                  </div>
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={onInputChange}
                    name="name"
                    value={name}
                    autoComplete="off"
                  />
                  <input
                    type="text"
                    placeholder="E-Mail"
                    onChange={onInputChange}
                    name="email"
                    value={email}
                    autoComplete="off"
                  />
                  <input
                    type="text"
                    placeholder="Message / Tell us little about your project . . ."
                    onChange={onInputChange}
                    name="message"
                    value={message}
                    autoComplete="off"
                  />
                </div>
                <div className="innerright">
                  <div
                    type="submit"
                    className="class-innersend"
                    onClick={handleSubmit}
                  >
                    <h4>Let's get started</h4>
                    <BiSend />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Contact;
