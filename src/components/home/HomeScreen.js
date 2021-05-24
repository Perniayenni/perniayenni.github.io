import React from "react";
import { Description } from "./Description";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { PersonalInformation } from "./PersonalInformation";

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
    </div>
  );
};
