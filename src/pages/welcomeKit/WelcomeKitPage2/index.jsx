import styles from "./styles.module.scss";
import png from "../../../assets/20943392 [Convertido] 1.png";
import ThreePointProgressBar from "./components/WelcomeKitPage4ProgressBar/ProgressBar";

export default function WelcomeKitPage2() {
  return (
    <div className={styles.containerFifthSection}>
      <div className={styles.fifthSectionFlex}>
        <div className={styles.fifthSectionFlexContent}>
          <ThreePointProgressBar />
          <div>
            <div className={styles.sectionContentStyling}>
              <h1>Seu kit está sendo preparado e logo será enviado.</h1>
            </div>
          </div>
          <img src={png} alt="" />
        </div>
      </div>
    </div>
  );
}
