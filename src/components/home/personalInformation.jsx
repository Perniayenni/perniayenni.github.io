import React from "react";
import { useTranslation } from "react-i18next";
import hexagon from "../../assets/img/hexagon.png";
import points from "../../assets/img/points.png";
import { capitalLetter } from "../../utils/utils";
import LazyImage from "../lazy-image/lazy-image";


export const PersonalInformation = () => {
  const { t } = useTranslation()
  const profession = t('personaInformation:profession').split(" ")

  return (
    <div className="personal-information">
      <div className="personal-information__content-hexagon">
        <div className="personal-information__content-name">
          <div className="personal-information__last-name">
            <p>{t('personaInformation:last-name')}</p>
          </div>
          <div className="personal-information__first-name">
            <p>{t('personaInformation:first-name')}</p>
          </div>
        </div>
        <div className="personal-information__content-img">
          <img
            className="personal-information__img"
            src={hexagon}
            alt="content_img"
          />
          <LazyImage
              additionalClassName="personal-information__photo-carnet"
              alt="photo_carnet"
              url='https://drive.google.com/uc?export=download&id=17rLn5O-My3dMOb7gan5skw3XBkTjGRt0'
          />
          <img
            className="personal-information__img-points"
            src={points}
            alt="photo_carnet"
          />
        </div>

        <div className="personal-information__content-text">
          <div className="personal-information__profession">
            <p>{capitalLetter(profession[0])}</p>
            <p>{capitalLetter(profession[1])}</p>
          </div>
          <div className="personal-information__icon-location">
            <i className="fas fa-map-marker-alt "></i>
            <p>{t('personaInformation:location')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
