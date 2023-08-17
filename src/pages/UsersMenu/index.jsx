import { useState } from "react";
import "./styles.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Modal from "../../components/modal/Modal";
import Edicao from "../../assets/svg/Edição.svg";
import Youtube from "../../assets/svg/Youtube.svg";
import Lixeira from "../../assets/svg/Lixeira.svg";
import Discord from "../../assets/svg/Discord.svg";


export default function UsersMenu() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleSaveModal = () => {
    alert('Informações salvas!');
    handleCloseModal();
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
          <p>Informe o vídeo de apresentação da empresa. O colaborador irá assistir assim que iniciar o processo.</p>
        </div>
        <div className="YoutubeEdit">
          <div>
            <img src={Youtube} alt="Youtube Logo" />
            <div>
              <p>Youtube</p>
              <p className="UrlYoutube">www.youtube.com/onboardme/new</p>
            </div>
          </div>
          <div className="icons-container">
            <img src={Edicao} alt="Editar" />
            <img src={Lixeira} alt="Lixeira" />
          </div>
        </div>
        <div className="ToolsTitle">
          <div className="Subtitle">Ferramentas do dia a dia.</div>
          <button className="RedButton" onClick={handleOpenModal}>adicionar</button>
          <Modal show={showModal} onClose={handleCloseModal} onSave={handleSaveModal} />
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