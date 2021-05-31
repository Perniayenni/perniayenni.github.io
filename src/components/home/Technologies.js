import React from "react";
import sql from "../../assets/imgs/sql.png";
import rails from "../../assets/imgs/rails.png";
import { tecnologies } from "../../data/tecnologies";
import esquina from "../../assets/imgs/banner_six.png";

export const Technologies = () => {
  return (
    <div className="technologies__content">
      <img
        className="technologies__img_esquina"
        src={esquina}
        alt="content_img"
      />
      <p className="technologies__title">TECNOLOGÍAS</p>
      <div className="technologies__content_data">
        {tecnologies.map((tecnologie) =>
          tecnologie.isIcono ? (
            <div className="technologies__content_icons">
              <i className={`fab ${tecnologie.iconoNombre} icono`}></i>
              <p>{tecnologie.nombre}</p>
            </div>
          ) : (
            <div className="technologies__content_icons">
              <img
                src={
                  tecnologie.imgName == "rails"
                    ? rails
                    : tecnologie.imgName == "sql"
                    ? sql
                    : ""
                }
              />
              <p>{tecnologie.nombre}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};
