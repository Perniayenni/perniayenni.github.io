import React from "react";
import content_img from "../../assets/imgs/content_img.png";

export const PersonalInformation = () => {
  return (
    <>
      <div className="personal-information__content">
        <div className="personal-information__hexagon">
          <div className="personal-information__content-img">
            <img
              className="personal-information__img"
              src={content_img}
              alt="content_img"
            />
            {/*    <img
            className="personal-information__img_two"
            src={fotocarnet}
            alt="foto_carnet"
          /> */}
          </div>

          <div className="personal-information__content-text">
            <div className="personal-information__is">
              <p>FRONTEND</p>
              <p>ENGINEER</p>
            </div>
            <div className="personal-information__business">
              <p>INGENIERÍA EN SISTEMAS O.G.R. S.A</p>
              <i class="fas fa-map-marker-alt personal-information__icono-location"></i>
              <p>Chile</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
