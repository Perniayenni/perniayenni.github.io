import React from "react";
import { Description } from "./Description";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { PersonalInformation } from "./PersonalInformation";
import { Projects } from "./Projects";
import { Technologies } from "./Technologies";

export const HomeScreen = () => {
  return (
    <div className="home__content">
      <div id="section1">
        <PersonalInformation />
      </div>
      <div id="section2">
        <Description />
      </div>
      <div id="section3">
        <Education />
      </div>
      <div id="section4">
        <Experience />
      </div>
      <div id="section5">
        <Projects />
      </div>
      <div id="section6">
        <Technologies />
      </div>
    </div>
  );
};
