import RedButton from "../../../components/RedButton";
import styles from "./styles.module.scss";

import imgPoints from "../../../assets/FerramentasCongratsFrame.png";

function JornadaPage4() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.congratulationsText}>
        <h1>Game concluído :)</h1>
        <h3>Você está por dentro das ferramentas. </h3>
      </div>

      <img src={imgPoints} alt="" />

      <RedButton path="/jornada/ferramentas/congrats2">Continuar</RedButton>
    </section>
  );
}

export default JornadaPage4;
