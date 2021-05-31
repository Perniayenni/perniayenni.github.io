import React from "react";

export const ExperienceCard = ({ selectedExperience, experience }) => {
  const handleClick = () => {
    selectedExperience(experience);
  };

  return (
    <div className="experience-card__content" onClick={handleClick}>
      {experience.selected ? (
        <i className="fas fa-arrow-circle-right icono"></i>
      ) : (
        <i className="fas fa-arrow-circle-down icono"></i>
      )}

      <div className="experience-card__content_date">
        <p className="experience-card__date_start">{experience.start_date}/</p>
        <p className="experience-card__date_end">{experience.end_date}</p>
      </div>
      <p className="experience-card__position">{experience.position}</p>
      <p className="experience-card__company_name">{experience.company_name}</p>
    </div>
  );
};
