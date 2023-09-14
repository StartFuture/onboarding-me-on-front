import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./assets/css/style.css";
import NavBarc from "../../components/NavBarc/NavBarc";
import SideBarc from "../../components/SideBarc/SideBarc";
import PreChose from "../PreChose";
import { Link } from "react-router-dom";




const Gamifield = () => {
  const [videoLink, setVideoLink] = useState({});
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/game_journey/get-video/1",
    })
      .then((response) => {
        setVideoLink(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <NavBarc />
      <SideBarc />
      <div className="video-container">
        <div className="title-with-bar">
          <div className="bar"></div>
          <h1 className="title">
            Olá, Usuário. <br />
            Boas-vindas à Jornada Gamificada da EmpresaNova.
          </h1>
        </div>
        <p>Para iniciar, assista o vídeo que preparamos para você. </p>

        <iframe
          className="video-iframe"
          src={videoLink.welcome_video_link}
          title="Vídeo do Youtube"
          allowFullScreen
        ></iframe>
 
        <div className="continue-button">
        <Link to='/preChose'>
          <button className="button">Continuar</button>
          </Link>
        </div> 
      </div>
    </>
  );
};

export default Gamifield;
