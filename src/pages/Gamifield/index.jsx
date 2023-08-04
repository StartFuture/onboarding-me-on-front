import React from "react";


const Gamifield = () => {
 return(

    <div className="video-screen-container">
      <div className="title-with-bar">
        <div className="bar"></div>
        <h1 className="title">
          Olá, Usuário. <br/>
          Boas-vindas à Jornada Gamificada da EmpresaNova.
        </h1>
        <p>Para iniciar, assista o vídeo que preparamos para você. </p>
      </div>
      <iframe
        className="video-iframe"
        src="https://www.youtube.com/embed/2VsENIzqWq8"
        title="Vídeo do Youtube"
        allowFullScreen
      ></iframe>
      <button className="button">Continuar</button>
    </div>
 ); 
};

export default Gamifield;
