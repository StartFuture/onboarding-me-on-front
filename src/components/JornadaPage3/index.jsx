import {NavLink} from "react-router-dom";
import styles from "./styles.module.scss";
import card1Img from "../../assets/JornadaPage3Card1.png";
import card2Img from "../../assets/JornadaPage3Card2.png";
import cardProgress from "../../assets/JornadaPage3Progress.png";

function JornadaPage3() {
  return (
    <section className={styles.sectionContainer}>
      <h1>
        Olá, Eduardo.
        <br />
        Boas-vindas à Jornada Gamificada da EmpresaNova.
      </h1>
      <h3>Selecione qual game deseja jogar</h3>
      <div className={styles.cardContaienr}>
        <div className={styles.cardAndBtn}>
          <img src={card1Img} alt="" />
          <img className={styles.progressBar} src={cardProgress} alt="" />
          <NavLink to="/jornada/page4" className={styles.navLink}>
            Continuar{" "}
          </NavLink>
        </div>

        <div className={styles.cardAndBtn}>
          <img src={card2Img} alt="" />
          <img className={styles.progressBar} src={cardProgress} alt="" />
          <NavLink to="/jornada/page4" className={styles.navLink}>
            Continuar{" "}
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default JornadaPage3;
