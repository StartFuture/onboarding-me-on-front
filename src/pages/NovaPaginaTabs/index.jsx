// NovaPaginaTabs.tsx
import React, { useState } from "react";
import styles from "./styles.module.scss"; // Your existing SCSS module

export default function NovaPaginaTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handlePrevTab = () => {
    setActiveTab((activeTab - 1 + 3) % 3); // Handles looping
  };

  const handleNextTab = () => {
    setActiveTab((activeTab + 1) % 3); // Handles looping
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
            <div className={styles.insideFlexTitleAndBtn}>
               <h3>
              Defina as culturas da empresa. As perguntas aparecerão em forma de
              quiz para o colaborador
            </h3>

            <button className={styles.addButtonUpper}>Adicionar</button>
            </div>
           

            <div className={styles.boxFlex}>
              <div className={styles.boxFlexFirstFlex}>
                <div className={styles.boxFlexIcon}>
                  <p>10pt</p>
                </div>

                <div className={styles.boxFlexIconInsideFlex}>
                  <h3>Respeito</h3>
                  <p>Lorem ipsum at dor?</p>
                </div>
              </div>

              <div className={styles.boxFlexButtons}>
                <img
                  src="https://img.icons8.com/ios-filled/50/pencil--v1.png"
                  alt="pencil--v1"
                />
                <img
                  src="https://img.icons8.com/windows/32/trash.png"
                  alt="trash"
                />
              </div>
            </div>

            <div className={styles.boxFlex}>
              <div className={styles.boxFlexFirstFlex}>
                <div className={styles.boxFlexIcon}>
                  <p>10pt</p>
                </div>

                <div className={styles.boxFlexIconInsideFlex}>
                  <h3>Respeito</h3>
                  <p>Lorem ipsum at dor?</p>
                </div>
              </div>

              <div className={styles.boxFlexButtons}>
                <img
                  src="https://img.icons8.com/ios-filled/50/pencil--v1.png"
                  alt="pencil--v1"
                />
                <img
                  src="https://img.icons8.com/windows/32/trash.png"
                  alt="trash"
                />
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
                <div className={styles.boxFlexIcon}>
                  <p>10pt</p>
                </div>

                <div className={styles.boxFlexIconInsideFlex}>
                  <h3>Respeito</h3>
                  <p>Lorem ipsum at dor?</p>
                </div>
              </div>

              <div className={styles.boxFlexButtons}>
                <img
                  src="https://img.icons8.com/ios-filled/50/pencil--v1.png"
                  alt="pencil--v1"
                />
                <img
                  src="https://img.icons8.com/windows/32/trash.png"
                  alt="trash"
                />
              </div>
            </div>

            <div className={styles.boxFlex}>
              <div className={styles.boxFlexFirstFlex}>
                <div className={styles.boxFlexIcon}>
                  <p>10pt</p>
                </div>

                <div className={styles.boxFlexIconInsideFlex}>
                  <h3>Respeito</h3>
                  <p>Lorem ipsum at dor?</p>
                </div>
              </div>

              <div className={styles.boxFlexButtons}>
                <img
                  src="https://img.icons8.com/ios-filled/50/pencil--v1.png"
                  alt="pencil--v1"
                />
                <img
                  src="https://img.icons8.com/windows/32/trash.png"
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
                <div className={styles.boxFlexIcon}>
                  <p>10pt</p>
                </div>

                <div className={styles.boxFlexIconInsideFlex}>
                  <h3>Inclusão</h3>
                  <p>Lorem ipsum at dor?</p>
                </div>
              </div>

              <div className={styles.boxFlexButtons}>
                <img
                  src="https://img.icons8.com/ios-filled/50/pencil--v1.png"
                  alt="pencil--v1"
                />
                <img
                  src="https://img.icons8.com/windows/32/trash.png"
                  alt="trash"
                />
              </div>
            </div>

            <button className={styles.addButtonDown}>Adicionar</button>

            
          </div>
          
          </div>
          }
      </div>
    </div>
  );
}
