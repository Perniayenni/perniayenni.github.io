import React, { useState, useEffect } from "react";
import esquina from "../../assets/imgs/banner_four.png";
import { experiences } from "../../data/experiences";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceCardSelected } from "./ExperienceCardSelected";

export const Experience = () => {
  const [experience, setexperience] = useState(experiences[0]);
  const [experiencesDate, setExperiencesDate] = useState(null);

  useEffect(() => {
    experiences[0].selected = true;
    setExperiencesDate(experiences);
  }, []);

  const selectedExperience = (expe) => {
    experiences.map((experience) => (experience.selected = false));
    expe.selected = true;
    setexperience(expe);
  };

  return (
    <>
      <div className="experience__content">
        <img
          className="experience__img_esquina"
          src={esquina}
          alt="content_img"
        />
        <p className="experience__title">EXPERIENCIA</p>
        <div className="experience__content_data">
          <div className="experience__content_list_experience">
            {experiencesDate
              ? experiencesDate.map((experience) => (
                  <ExperienceCard
                    key={experience.id}
                    selectedExperience={selectedExperience}
                    experience={experience}
                  />
                ))
              : ""}
          </div>
          <div className="experience__content_experience_selected">
            <ExperienceCardSelected experience={experience} />
          </div>
        </div>
      </div>
    </>
  );
};
