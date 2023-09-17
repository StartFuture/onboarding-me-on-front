import {NavLink} from "react-router-dom";
import styles from "./styles.module.scss";

import imgPoints from "../../assets/FerramentasCongratsFrame.png";

function JornadaPage4() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.congratulationsText}>
        <h1>Game concluído :)</h1>
        <h3>Você está por dentro das ferramentas. </h3>
      </div>

      <img src={imgPoints} alt="" />

      <NavLink to="/jornada/ferramentas/congrats2" className={styles.navLink}>Continuar</NavLink>
    </section>
  );
}

export default JornadaPage4;
