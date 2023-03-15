import React from "react";
import "./TopBar.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

export default function TopBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Osura Ronath.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+94 71-8953050</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>osura.ronath@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamberger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
