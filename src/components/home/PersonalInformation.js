import React from "react";
import content_img from "../../assets/imgs/content_img.png";
import foto_carnet from "../../assets/imgs/foto_carnet.jpeg";
import puntos from "../../assets/imgs/puntos.png";

export const PersonalInformation = () => {
  return (
    <>
      <div className="personal-information__content">
        <div className="personal-information__content-hexagon">
          <img
            className="personal-information__img"
            src={content_img}
            alt="content_img"
          />
          <img
            className="personal-information__img_two"
            src={foto_carnet}
            alt="foto_carnet"
          />
          <img
            className="personal-information__img_three"
            src={puntos}
            alt="foto_carnet"
          />
          <div className="personal-information__content-text">
            <div className="personal-information__is">
              <p>FRONTEND</p>
              <p>ENGINEER</p>
            </div>
            <div className="personal-information__business">
              <p>INGENIERÍA EN SISTEMAS O.G.R. S.A</p>
              <i className="fas fa-map-marker-alt personal-information__icono-location"></i>
              <p>Chile</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
