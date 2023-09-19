import {useState} from "react";

import {NavLink} from "react-router-dom";
import styles from "./styles.module.scss";
import figmaIcon from "../../../assets/FigmaIconFerramentas.png";
import checkImg from "../../../assets/Check.png";

export default function Ferramentas() {
  const [isFilledFigma, setIsFilledFigma] = useState(true);
  const [isFilledDiscord, setIsFilledDiscord] = useState(true);
  const [isFilledSlack, setIsFilledSlack] = useState(true);

  return (
    <div className={styles.containerThirdSection}>
      {/* ... your third section content ... */}

      <h1>Ferramentas do Dia a Dia</h1>

      <h5>
        Ganhe pontos ao instalar e vincular as ferramentas que você irá usar no
        dia a dia
      </h5>

      <div className={styles.thirdSectionContent}>
        <p>Comunicação</p>

        <div className={styles.boxFlex}>
          <div className={styles.boxFlexIcon}>
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
              alt=""
            />
            <p>Discord</p>
          </div>

          <div className={styles.boxFlexButtons}>
            <div className={styles.buttonDivFlex}>
              <button className={styles.buttonBaixar}>Baixar</button>
              <button className={styles.buttonVincular}>Vincular</button>
            </div>

            {isFilledDiscord && (
              <div className={styles.figmaBoxPoints}>
                <img src={checkImg} alt="" />
                <p>10pt</p>
              </div>
            )}
          </div>
        </div>

        <div className={styles.boxFlex}>
          <div className={styles.boxFlexIcon}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111674.png"
              alt=""
            />
            <p>Slack</p>
          </div>

          <div className={styles.boxFlexButtons}>
            <div className={styles.buttonDivFlex}>
              <button className={styles.buttonBaixar}>Baixar</button>
              <button className={styles.buttonVincular}>Vincular</button>
            </div>

            {isFilledSlack && (
              <div className={styles.figmaBoxPoints}>
                <img src={checkImg} alt="" />
                <p>10pt</p>
              </div>
            )}
          </div>
        </div>

        <p>Design</p>

        <div className={styles.boxFlex}>
          <div className={styles.boxFlexIcon}>
            <img src={figmaIcon} alt="" />
            <p>Figma</p>
          </div>

          <div className={styles.boxFlexButtons}>
            <div className={styles.buttonDivFlex}>
              <button className={styles.buttonBaixar}>Baixar</button>
              <button className={styles.buttonVincular}>Vincular</button>
            </div>

            {isFilledFigma && (
              <div className={styles.figmaBoxPoints}>
                <img src={checkImg} alt="" />
                <p>10pt</p>
              </div>
            )}
          </div>
        </div>

        {isFilledDiscord & isFilledFigma & isFilledSlack ? (
          <NavLink
            className={styles.navLink}
            to="/jornada/ferramentas/congrats">
            Finalizar
          </NavLink>
        ) : null}
      </div>
    </div>
  );
}
