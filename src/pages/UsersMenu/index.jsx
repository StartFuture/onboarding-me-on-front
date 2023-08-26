import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Modal from "../../components/modal/Modal";
import Edicao from "../../assets/svg/Edição.svg";
import Youtube from "../../assets/svg/Youtube.svg";
import Lixeira from "../../assets/svg/Lixeira.svg";
import Discord from "../../assets/svg/Discord.svg";
import VideoModal from "../../components/modalVideo/ModalVideo";

export default function UsersMenu() {
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

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleSaveModal = () => {
    alert("Informações salvas!");
    handleCloseModal();
  };

  const [showVideoModal, setShowVideoModal] = useState(false);

  const openModal = () => {
    setShowVideoModal(true);
  };

  const closeModal = () => {
    setShowVideoModal(false);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="Maincontent">
        <div className="Title-with-Bar">
          <div className="Bar" />
          <div className="Title">
            <h3>
              Olá, Usuário.
              <br />
              Configure a Jornada Gamificada dos seus colaboradores.
            </h3>
          </div>
        </div>
        <div className="Navegation">
          <div className="Navegation-Button">
            <ul>
              <li>
                <a href="#" className="Geral">
                  Geral
                </a>
              </li>
              <li>
                <a href="#">Cultura</a>
              </li>
              <li>
                <a href="#">Princípios</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Subtitle">
          <p>
            Informe o vídeo de apresentação da empresa. O colaborador irá
            assistir assim que iniciar o processo.
          </p>
        </div>
        {videoLink.welcome_video_link ? (
          <div className="YoutubeEdit">
            <div>
              <img src={Youtube} alt="Youtube Logo" />
              <div>
                <p>Youtube</p>
                <p className="UrlYoutube">{videoLink.welcome_video_link}</p>
              </div>
            </div>
            <div className="icons-container">
              <img onClick={openModal} src={Edicao} alt="Editar" />
              <img src={Lixeira} alt="Lixeira" />
            </div>
          </div>
        ) : (
          !videoLink.welcome_video_link && (
            <div className="AddVideoButtonContainer">
              <button className="RedButton" onClick={openModal}>
                Adicionar Vídeo
              </button>
            </div>
          )
        )}
        <VideoModal
          isNewVideo={!videoLink.welcome_video_link}
          videoLink={videoLink.welcome_video_link}
          show={showVideoModal}
          onClose={closeModal}
        />

        <div className="ToolsTitle">
          <div className="Subtitle">Ferramentas do dia a dia.</div>
          <button className="RedButton" onClick={handleOpenModal}>
            adicionar
          </button>
          <Modal
            show={showModal}
            onClose={handleCloseModal}
            onSave={handleSaveModal}
          />
        </div>
        <div className="Tools">
          <div className="ToolsEdit">
            <div>
              <img src={Discord} alt="Discord" />
              <div>
                <p>Discord</p>
                <p className="Points">10pt</p>
              </div>
            </div>
            <div className="icons-container">
              <img src={Edicao} alt="Editar" />
              <img src={Lixeira} alt="Lixeira" />
            </div>
          </div>
          <div className="ToolsEdit">
            <div>
              <img src={Discord} alt="Discord" />
              <div>
                <p>Discord</p>
                <p className="Points">10pt</p>
              </div>
            </div>
            <div className="icons-container">
              <img src={Edicao} alt="Editar" />
              <img src={Lixeira} alt="Lixeira" />
            </div>
          </div>
          <div className="ToolsEdit">
            <div>
              <img src={Discord} alt="Discord" />
              <div>
                <p>Discord</p>
                <p className="Points">10pt</p>
              </div>
            </div>
            <div className="icons-container">
              <img src={Edicao} alt="Editar" />
              <img src={Lixeira} alt="Lixeira" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
