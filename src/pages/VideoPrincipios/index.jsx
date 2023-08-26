import React from "react";
import './assets/css/style.css';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Respeito from "../Respeito";


const VideoPrincipios = () => {
 return(
   <>
   <Sidebar/>
   <Navbar/>
    <div className="video-container">
      <div className="title-with-bar">
        <div className="bar"></div>
        <h1 className="title">
          Respeito
        </h1>
         </div>
         <p>Assista ao vídeo e fique por dentro sobre as culturas da EmpresaNova.</p>
     
      <iframe
        className="video-iframe"
        src="https://www.youtube.com/embed/2VsENIzqWq8"
        title="Vídeo do Youtube"
        allowFullScreen
      ></iframe>

     <div className="continue-button">
      <a href="/respeito">
      <button className="button">Continuar</button></a>
      </div>
      </div>
      </>
 ); 
};

export default VideoPrincipios;
