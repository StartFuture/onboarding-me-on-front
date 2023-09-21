import {useState} from "react";
import styles from "./styles.module.scss";

import CultureOption from "../../../components/CultureOption/CultureOption";
import PrincipleOption from "../../../components/PrincipleOption/PrincipleOption";
import GeneralOption from "../../../components/GeneralOption/GeneralOption";

export default function JornadaAdmin() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = tabIndex => {
    setActiveTab(tabIndex);
  };

  const handlePrevTab = () => {
    setActiveTab((activeTab - 1 + 3) % 3);
  };

  const handleNextTab = () => {
    setActiveTab((activeTab + 1) % 3);
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
            onClick={() => handleTabClick(0)}>
            GERAL
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === 1 ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick(1)}>
            CULTURA
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === 2 ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick(2)}>
            PRINCÍPIOS
          </div>
        </div>
        <button className={styles.mobileArrow} onClick={handleNextTab}>
          &gt; {/* Right arrow */}
        </button>
      </div>

      <div className={styles.thirdSectionContent}>
        {activeTab === 0 && (
          <div className={styles.insideFlex}>
            <GeneralOption />
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <div className={styles.insideFlex}>
              <CultureOption/>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <div className={styles.insideFlex}>
              <PrincipleOption/> 
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
