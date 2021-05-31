import React from "react";
import { Footer } from "../components/Footer";
import { Description } from "../components/home/Description";
import { Education } from "../components/home/Education";
import { Experience } from "../components/home/Experience";
import { PersonalInformation } from "../components/home/PersonalInformation";
import { Projects } from "../components/home/Projects";
import { Technologies } from "../components/home/Technologies";

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
      <div id="section7">
        <Footer />
      </div>
    </div>
  );
};
