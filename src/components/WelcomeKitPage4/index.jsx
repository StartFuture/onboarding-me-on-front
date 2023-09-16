import {NavLink} from "react-router-dom";
import styles from "./styles.module.scss";
import png from "../../assets/WKPage3Frame.png";
import ThreePointProgressBar from "./components/WelcomeKitPage4ProgressBar/ProgressBar";

export default function WelcomeKitPage4() {
  return (
    <div className={styles.containerFifthSection}>
      <div className={styles.fifthSectionFlex}>
        <div className={styles.fifthSectionFlexContent}>
          <ThreePointProgressBar />
          <div>
            <div className={styles.sectionContentStyling}>
              <h1>Parabéns!</h1>
              <p>
                Você já está com o kit <br /> em mãos :)
              </p>
            </div>
            <NavLink className={styles.navLink} to="/welcomekit/page5">
              Continuar
            </NavLink>
          </div>
          <img className={styles.imgFrame} src={png} alt="" />
        </div>
      </div>
    </div>
  );
}
