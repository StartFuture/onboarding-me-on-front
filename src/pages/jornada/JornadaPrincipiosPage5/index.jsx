import {NavLink} from "react-router-dom";
import styles from "./styles.module.scss";
import imgPoints from "../../../assets/JornadaPrincipiosPage5CongratsImg.png";

function JornadaPrincipiosPage5() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.congratulationsText}>
        <h1>Game concluído :)</h1>
        <h3>Você está por dentro das ferramentas. </h3>
      </div>

      <img src={imgPoints} alt="" />

      <NavLink to="/jornada/principios/page6" className={styles.navLink}>
        Continuar
      </NavLink>
    </section>
  );
}

export default JornadaPrincipiosPage5;
