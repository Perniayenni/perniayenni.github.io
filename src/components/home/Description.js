import React from "react";
import cubito from "../../assets/imgs/cubito.png";
import puntos from "../../assets/imgs/puntitospeques.png";

export const Description = () => {
  return (
    <div className="description__content">
      <div className="description__content_img "></div>
      <div className="description__content_data">
        <div className="description__content_cube">
          <div className="description__content_cubo">
            <img className="description__cubito" src={cubito} alt="cubito" />
          </div>
        </div>
        <div className="description__description">
          <p>
            Joven dinámica. Orientada al trabajo por objetivos. Capacidad de
            integración y dinamismo. Con imaginación e iniciativa para
            desarrollar ideas nuevas. Entusiasmo y energía. Rigor en el
            cumplimiento de los compromisos. Con sentido común y
            responsabilidad.
          </p>
          <div className="description__username">@YenniPernia</div>
        </div>
        <div className="description__social_media">
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-instagram-square"></i>
          <i className="fab fa-github-square"></i>
        </div>
      </div>
      <img className="description__punticos" src={puntos} alt="punticos" />
    </div>
  );
};
