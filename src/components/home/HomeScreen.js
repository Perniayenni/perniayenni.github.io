import React from "react";
import { Description } from "./Description";
import { Experience } from "./Experience";
import { PersonalInformation } from "./PersonalInformation";

export const HomeScreen = () => {
  return (
    <div className="home__content">
      <div className="home__box" id="section1">
        <PersonalInformation />
      </div>
      <div className="home__box" id="section2">
        <Description />
      </div>
      <div className="home__box" id="section3">
        <Experience />
      </div>
    </div>
  );
};
