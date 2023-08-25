import { useState } from "react";
import "./styles.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Modal from "../../components/modal/Modal";
import Edicao from "../../assets/svg/Edição.svg";
import Youtube from "../../assets/svg/Youtube.svg";
import Lixeira from "../../assets/svg/Lixeira.svg";
import Discord from "../../assets/svg/Discord.svg";
import AddCultura from "../AdicionarCultura";
import AddPrincipio from "../Adicionar Principio";
import VideoModal from "../../components/modalVideo/ModalVideo";
import Respeito from "../Respeito";
import Respect from "../../components/RespectForPrincipio/RespectForPrincipios";
import RespectForPrincipios from "../../components/RespectForPrincipio/RespectForPrincipios";
import RespectForCultura from "../../components/RespectForCultura/RespectForCultura";

export default function UsersMenu() {
  const [showModal, setShowModal] = useState(false);
  const [activeSection, setActiveSection] = useState("Geral");

  const handleTabClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleSaveModal = () => {
    alert("Informações salvas!");
    handleCloseModal();
  };
  const [videoAdded, setVideoAdded] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openModal = () => {
    setShowVideoModal(true);
  };

  const closeModal = () => {
    setShowVideoModal(false);
  };

  const addVideo = (url) => {
    setVideoAdded(true);
    setVideoUrl(url);
    closeModal();
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
              <a
                  href="#"
                  className={activeSection === "Geral" ? "Geral active" : "Geral"}
                  onClick={() => handleTabClick("Geral")}
                >
                  Geral
                </a>
              </li>
              <li>
              <a
                  className={activeSection === "Cultura" ? "active" : ""}
                  onClick={() => handleTabClick("Cultura")}
                >
                  Cultura
                  </a>
              </li>
              <li>
              <a
                  className={activeSection === "Principios" ? "active" : ""}
                  onClick={() => handleTabClick("Principios")}
                >
                  Princípios</a>
              </li>
            </ul>
          </div>
        </div>

        {activeSection == "Geral" && (
            <section className="firstSection">
            <div className="Subtitle">
              <p>
                Informe o vídeo de apresentação da empresa. O colaborador irá
                assistir assim que iniciar o processo.
              </p>
            </div>
            {videoAdded ? (
              <div className="YoutubeEdit">
                <div>
                  <img src={Youtube} alt="Youtube Logo" />
                  <div>
                    <p>Youtube</p>
                    <p className="UrlYoutube">{videoUrl}</p>
                  </div>
                </div>
                <div className="icons-container">
                  <img src={Edicao} alt="Editar" />
                  <img src={Lixeira} alt="Lixeira" />
                </div>
              </div>
            ) : (
              !videoAdded && (
                <div className="AddVideoButtonContainer">
                  <button className="RedButton" onClick={openModal}>
                    Adicionar Vídeo
                  </button>
                </div>
              )
            )}
            <VideoModal
              show={showVideoModal}
              onClose={closeModal}
              onAddVideo={addVideo}
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
          </section>
          
        )}

      

         {activeSection === "Cultura" && (
           <section className="secondSection">
            <RespectForCultura />
           </section>
   

         )}


          {activeSection === "Principios" && (
           <section className="thirdSection">
            <RespectForPrincipios />
          
           </section>
   

         )}
       
       
        

      </div>
    </>
  );
}
