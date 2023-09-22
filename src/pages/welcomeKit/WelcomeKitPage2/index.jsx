import styles from "./styles.module.scss";
import png from "../../../assets/20943392 [Convertido] 1.png";
import ThreePointProgressBar from "./components/WelcomeKitPage4ProgressBar/ProgressBar";
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import RedButton from "../../../components/RedButton";

export default function WelcomeKitPage2() {

  return (
    <div className={styles.containerFifthSection}>
      <div className={styles.fifthSectionFlex}>
        <div className={styles.fifthSectionFlexContent}>
          <ThreePointProgressBar />
          <div>
            <div className={styles.sectionContentStyling}  >
              <h1>Seu kit está sendo preparado e logo será enviado.</h1>
            </div>
          <RedButton path='/welcomekit/page3'>Continuar</RedButton>
          </div>
          <img src={png} alt="" />
        </div>
      </div>
    </div>
  );
}
