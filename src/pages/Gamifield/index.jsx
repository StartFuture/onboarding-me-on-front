import React from "react";
import './assets/css/style.css'

const Gamifield = () => {
 return(

    <div className="video-container">
      <div className="title-with-bar">
        <div className="bar"></div>
        <h1 className="title">
          Olá, Usuário. <br/>
          Boas-vindas à Jornada Gamificada da EmpresaNova.
        </h1>
         </div>
         <p>Para iniciar, assista o vídeo que preparamos para você. </p>
     
      <iframe
        className="video-iframe"
        src="https://www.youtube.com/embed/2VsENIzqWq8"
        title="Vídeo do Youtube"
        allowFullScreen
      ></iframe>

     <div className="continue-button">
      <button className="button">Continuar</button>
      </div>
      </div>
 ); 
};

export default Gamifield;
