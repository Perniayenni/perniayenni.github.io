import React from "react";
import content_img from "../../assets/imgs/content_img.png";
import hexagono from "../../assets/imgs/hexagono.png";
import foto_carnet from "../../assets/imgs/foto_carnet.jpeg";
import puntos from "../../assets/imgs/puntos.png";

export const PersonalInformation = () => {
  return (
    <div className="personal-information__content">
      <div className="personal-information__content-hexagon">
        <div className="personal-information__content-name">
          <div className="personal-information__last-name">
            <p>PERNÍA</p>
          </div>
          <div className="personal-information__first-name">
            <p>Yennifer</p>
          </div>
        </div>
        <div className="personal-information__content-img">
          <img
            className="personal-information__img"
            src={hexagono}
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
        </div>

        <div className="personal-information__content-text">
          <div className="personal-information__is">
            <p>FRONTEND</p>
            <p>ENGINEER</p>
          </div>
          <div className="personal-information__business">
            <p>INGENIERÍA EN SISTEMAS O.G.R. S.A</p>
            <div className="personal-information__icono-location">
              <i className="fas fa-map-marker-alt "></i>
              <p>Chile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
