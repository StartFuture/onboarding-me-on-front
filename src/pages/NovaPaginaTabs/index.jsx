// NovaPaginaTabs.tsx
import React, { useState } from "react";
import styles from "./styles.module.scss"; // Your existing SCSS module
import AddCultura from "../../components/AdicionarCultura";
import AddPrincipio from "../../components/AdicionarPrincipio";


import ytIcon from '../../assets/YoutubeIcon.png'
import editPng from '../../assets/Edit.png'
import excluirIcon from '../../assets/Delete.png'
import DiscordIcon from '../../assets/DiscordIcon.png'
import SlackIcon from '../../assets/SlackIcon.png'
import FigmaIcon from '../../assets/FigmaIconFerramentas.png'



export default function NovaPaginaTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handlePrevTab = () => {
    setActiveTab((activeTab - 1 + 3) % 3); // looping
  };

  const handleNextTab = () => {
    setActiveTab((activeTab + 1) % 3); //  looping
  };

  return (
    <div className={styles.containerThirdSection}>
      <h1>
        Olá, Usuário.
        <br />
        Boas-vindas à Jornada Gamificada dos seus colaboradores
      </h1>

      <div className={styles.topBar}>
        <button className={styles.mobileArrow} onClick={handlePrevTab}>
          &lt; {/* Left arrow */}
        </button>
        <div className={styles.centeredTab}>
          <div
            className={`${styles.tab} ${
              activeTab === 0 ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick(0)}
          >
            GERAL
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === 1 ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            CULTURA
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === 2 ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick(2)}
          >
            PRINCÍPIOS
          </div>
        </div>
        <button className={styles.mobileArrow} onClick={handleNextTab}>
          &gt; {/* Right arrow */}
        </button>
      </div>

      <div className={styles.thirdSectionContent}>
        {/* Content for respective tabs */}
        {activeTab === 0 && (
          
          
          <div className={styles.insideFlex}>

              <h3>
              Informe o vídeo de apresentação da empresa. O colaborador irá assistir assim que iniciar o processo.
              </h3>

            <div className={styles.boxFlex}>
              <div className={styles.boxFlexFirstFlex}>
                <div className={styles.boxFlexIcon}>
                  <img src={ytIcon} alt="" />
                </div>

                <div className={styles.boxFlexIconInsideFlex}>
                  <h3>Respeito</h3>
                  <p>Lorem ipsum at dor?</p>
                </div>
              </div>

              <div className={styles.boxFlexButtons}>
                <img
                  src={editPng}
                  alt="pencil--v1"
                />
               
              </div>
            </div>
            <div className={styles.insideFlexTitleAndBtn}>
               <h3>
               Ferramentas do dia a dia.
            </h3>

            <button className={styles.addButtonUpper}>Adicionar</button>
            </div>

            <div className={styles.cardFlex}>

              {/* Primeiro card  */}
            <div className={styles.boxFlex}>
              <div className={styles.boxFlexFirstFlex}>
                <div className={styles.boxFlexIcon}>
                  <img src={DiscordIcon} alt="" />
                </div>

                <div className={styles.boxFlexIconInsideFlex}>
                  <h3>Discord</h3>
                  <p>10pt</p>
                </div>
              </div>

              <div className={styles.boxFlexButtons}>
                <img
                  src={editPng}
                  alt="pencil--v1"
                />
                <img
                  src={excluirIcon}
                  alt="trash"
                />
              </div>
            </div>

            {/* Segundo card */}
            <div className={styles.boxFlex}>
              <div className={styles.boxFlexFirstFlex}>
                <div className={styles.boxFlexIcon}>
                  <img src={SlackIcon} alt="" />
                </div>

                <div className={styles.boxFlexIconInsideFlex}>
                  <h3>Slack</h3>
                  <p>10pt</p>
                </div>
              </div>

              <div className={styles.boxFlexButtons}>
                <img
                  src={editPng}
                  alt="pencil--v1"
                />
                <img
                  src="https://img.icons8.com/windows/32/trash.png"
                  alt="trash"
                />
              </div>





            </div>

             {/* Segundo card */}
             <div className={styles.boxFlex}>
              <div className={styles.boxFlexFirstFlex}>
                <div className={styles.boxFlexIcon}>
                  <img src={FigmaIcon} alt="" />
                </div>

                <div className={styles.boxFlexIconInsideFlex}>
                  <h3>Figma</h3>
                  <p>10pt</p>
                </div>
              </div>

              <div className={styles.boxFlexButtons}>
                <img
                  src={editPng}
                  alt="pencil--v1"
                />
                <img
                    src={excluirIcon}
                  alt="trash"
                />
              </div>





            </div>

            </div>
           
          

            <button className={styles.addButtonDown}>Adicionar</button>

            
          </div>
        )}
        {activeTab === 1 && <div>
          <div className={styles.insideFlex}>
            <div className={styles.insideFlexTitleAndBtn}>
               <h3>
              Defina as culturas da empresa. As perguntas aparecerão em forma de
              quiz para o colaborador
            </h3>

            <button className={styles.addButtonUpper}>Adicionar</button>
            </div>
           

            <div className={styles.boxFlex}>
              <div className={styles.boxFlexFirstFlex}>
                <div className={styles.boxFlexIconBordered}>
                  <p>10pt</p>
                </div>

                <div className={styles.boxFlexIconInsideFlex}>
                  <h3>Respeito</h3>
                  <p>Lorem ipsum at dor?</p>
                </div>
              </div>

              <div className={styles.boxFlexButtons}>
                <img
                src={editPng}
                  alt="pencil--v1"
                  onClick={() => handleTabClick(3)}
                />
                <img
                    src={excluirIcon}
                  alt="trash"
                />
              </div>
            </div>

            <div className={styles.boxFlex}>
              <div className={styles.boxFlexFirstFlex}>
                <div className={styles.boxFlexIconBordered}>
                  <p>10pt</p>
                </div>

                <div className={styles.boxFlexIconInsideFlex}>
                  <h3>Respeito</h3>
                  <p>Lorem ipsum at dor?</p>
                </div>
              </div>

              <div className={styles.boxFlexButtons}>
                <img
                  src={editPng}
                  alt="pencil--v1"
                  onClick={() => handleTabClick(3)}
                />
                <img
                   src={excluirIcon}
                  alt="trash"
                />
              </div>
            </div>

            <button className={styles.addButtonDown}>Adicionar</button>
            
          </div>
          </div>}
        {activeTab === 2 && <div>

          <div className={styles.insideFlex}>
            <div className={styles.insideFlexTitleAndBtn}>
               <h3>
              Defina as culturas da empresa. As perguntas aparecerão em forma de
              quiz para o colaborador
            </h3>

            <button className={styles.addButtonUpper}>Adicionar</button>
            </div>
           

          

            <div className={styles.boxFlex}>
              <div className={styles.boxFlexFirstFlex}>
                <div className={styles.boxFlexIconBordered}>
                  <p>10pt</p>
                </div>

                <div className={styles.boxFlexIconInsideFlex}>
                  <h3>Inclusão</h3>
                  <p>Lorem ipsum at dor?</p>
                </div>
              </div>

              <div className={styles.boxFlexButtons}>
                <img
                  src={editPng}
                  alt="pencil--v1"
                  onClick={() => handleTabClick(4)}
                />
                <img
                    src={excluirIcon}
                  alt="trash"
                  
                />
              </div>
            </div>

            <button className={styles.addButtonDown}>Adicionar</button>

            
          </div>
          
          </div>
          }

{activeTab === 3 && <div>

  <AddCultura />

</div>
}

{activeTab === 4 && <div>

  <AddPrincipio />

</div>
}
      </div>
    </div>
  );
}
