import React from "react";
import content_img from "../../assets/imgs/content_img.png";
import hexagon from "../../assets/imgs/hexagono.png";
import photo_carnet from "../../assets/imgs/foto_carnet.jpeg";
import points from "../../assets/imgs/puntos.png";

export const PersonalInformation = () => {
  return (
    <div className="personal-information">
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
            src={hexagon}
            alt="content_img"
          />
          <img
            className="personal-information__photo-carnet"
            src={photo_carnet}
            alt="photo_carnet"
          />
          <img
            className="personal-information__img-points"
            src={points}
            alt="photo_carnet"
          />
        </div>

        <div className="personal-information__content-text">
          <div className="personal-information__profession">
            <p>FRONTEND</p>
            <p>ENGINEER</p>
          </div>
          <div className="personal-information__icon-location">
            <i className="fas fa-map-marker-alt "></i>
            <p>Chile</p>
          </div>
        </div>
      </div>
    </div>
  );
};
