import React from "react";
import { experiences } from "../../data/experiences";

export const ExperienceCardSelected = ({ experience }) => {
  return (
    <div className="experience-card-selected__content">
      <i class="fas fa-arrow-circle-down icono"></i>
      <div className="experience-card__content_date">
        <p className="experience-card__date_start">{experience.start_date}/</p>
        <p className="experience-card__date_end">{experience.end_date}</p>
      </div>
      <p className="experience-card__position">{experience.position}</p>
      <p className="experience-card-selected__company_name">
        {experience.company_name}
      </p>
      <label className="experience-card-selected__subtitle">Funciones:</label>
      <p className="experience-card-selected__description">
        {experience.functions}
      </p>
      <label className="experience-card-selected__subtitle">Creación:</label>
      <p
        className="experience-card-selected__description"
        dangerouslySetInnerHTML={{ __html: experience.creation }}
      ></p>
    </div>
  );
};
