import React from "react";
import "./Intro.scss";

export default function Intro() {
  return (
  <div className="intro" id="intro">
    <div className="left">
      <div className="imgContainer">
        <img src="src/assets/man.png" alt="" />
      </div>
    </div>

    <div className="right">
      <div className="wrapper">
        <h2>Hi There, I'm </h2>
        <h1>Osura Ronath</h1>
        <h3>Software Engineer <span> Photographer </span> </h3>
      </div>
      <a href="#portfolio">
        <img src="src/assets/down.png" alt="" />
      </a>
    </div>
  </div>
  );
}
