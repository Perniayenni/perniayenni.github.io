import React from "react";

export const Education = () => {
  return (
    <div className="education__content ">
      <div className="education__content_img "></div>
      <div className="education__content_data ">
        <div className="education__content_data_university">
          <div className="education__university">
            <p className="education__instituto">
              Instituto universitario Jesús Obrero{" "}
            </p>
            <p className="education__name_university">T.S.U en Informática</p>
            <p> 2010 – 2013</p>
          </div>
        </div>

        <div className="education__content_data_destacado">
          <div className="education__destacado">
            <p>DESTACADO</p>
          </div>
        </div>
        <div className="education__content_language">
          <div className="education__language">
            <div className="education__content_icon">
              <i className="fas fa-globe-americas icono"></i>
            </div>
            <div className="education__content_text">
              <p className="education__text_title"> Idiomas</p>
              <p className="education__text_anguage">Español: Nativo</p>
              <p className="education__text_anguage">Inglés: Intermedio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
