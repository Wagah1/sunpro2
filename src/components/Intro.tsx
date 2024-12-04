import React from "react";
import "./intro.css";
import TextScroller from "./TextScroller"; // Import the TextScroller component

const Intro: React.FC = () => {
  const services = [
    "Solar PV Systems",
    "Electrical Systems",
    "Solar Water Heaters",
    "CCTV and Local Area Networks",
  ];

  return (
    <div id="intro">
      <div id="content">
        <div id="p">
          <p>We specialize in the installation, maintenance, and repair of:</p>
        </div>
        <TextScroller texts={services} />
      </div>
    </div>
  );
};

export default Intro;
