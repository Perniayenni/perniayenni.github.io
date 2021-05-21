import React from "react";
import content_img from "../../assets/imgs/content_img.png";

export const PersonalInformation = () => {
  return (
    <>
      <div className="personal-information__content">
        <div className="personal-information__hexagon">
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
          <div className="personal-information__is">
            <p>FRONTEND</p>
            <p>ENGINEER</p>
          </div>
        </div>
      </div>
    </>
  );
};
