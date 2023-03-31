import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./main.css";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const Header = (props) => {
  const [isSidebarOpen, setSidebar] = useState(false);
  const [name, setName] = useState("Aditya S.");

  const handleMenu = () => {
    setSidebar(!isSidebarOpen);
  };

  return (
    <div className="mainHeader">
      <div className={isSidebarOpen ? "sidebar open" : "sidebar"}>
        <div className="sidebar-div">
          <div className="side-items">
            <Link
              className={props.title == "home" ? "active" : "unactive"}
              to="/"
              onClick={handleMenu}
            >
              HOME
            </Link>
          </div>
          <div className="side-items">
            <Link
              className={props.title == "aboutme" ? "active" : "unactive"}
              to="/aboutme"
              onClick={handleMenu}
            >
              ABOUT ME
            </Link>
          </div>
          <div className="side-items">
            <Link
              className={props.title == "contact" ? "active" : "unactive"}
              to="/contact"
              onClick={handleMenu}
            >
              CONTACT
            </Link>
          </div>
          <div className="side-items">
            <Link
              className={props.title == "project" ? "active" : "unactive"}
              to="/project"
              onClick={handleMenu}
            >
              PROJECTS
            </Link>
          </div>
        </div>
      </div>
      <div className="leftHeader">
        <Link to="/" className="heading-style">
          {name}
        </Link>
      </div>
      <div className="rightHeader-l">
        <Link
          className={props.title == "aboutme" ? "active" : "unactive"}
          to="/aboutme"
        >
          ABOUT ME
        </Link>
        <Link
          className={props.title == "contact" ? "active" : "unactive"}
          to="/contact"
        >
          CONTACT
        </Link>
        <Link
          className={props.title == "project" ? "active" : "unactive"}
          to="/project"
        >
          PROJECTS
        </Link>
      </div>
      <div className="menu" onClick={handleMenu}>
        {isSidebarOpen ? (
          <RxCross2 size="35px" color="#FFFFFF" />
        ) : (
          <AiOutlineMenu size="35px" color="#FFFFFF" />
        )}
      </div>
    </div>
  );
};

export default Header;
