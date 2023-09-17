import styles from "./styles.module.scss";
import imgPoints from "../../assets/JornadaPage4Frame.png";
import medal1IMG from "../../assets/JornadaPage4Medalha1.png";
import medal2IMG from "../../assets/JornadaPage4Medalha2.png";

function JornadaPage4() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.congratulationsText}>
        <h1>Parabéns!</h1>
        <h3>Você finalizou a jornada Gameficada :)</h3>
      </div>

      <img src={imgPoints} alt="" />

      <div className={styles.medalBox}>
        <p>Mestre das Ferramentas</p>
        <img src={medal1IMG} alt="" />
      </div>

      <div className={styles.medalBox}>
        <p>Ouro em Cultura & Princípios</p>
        <img src={medal2IMG} alt="" />
      </div>
    </section>
  );
}

export default JornadaPage4;
