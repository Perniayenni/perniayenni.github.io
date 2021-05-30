import React from "react";
import esquina from "../../assets/imgs/banner_five.png";

export const Projects = () => {
  return (
    <div className="projects__content">
      {/* <div className="projects__content_img "></div> */}
      <img className="projects__img_esquina" src={esquina} alt="content_img" />
      <div className="projects__content_data">
        <div className="projects__title">
          <p>PRO</p>
          <p>YECTOS</p>
        </div>
        <div className="projects__projects"></div>
      </div>
    </div>
  );
};
