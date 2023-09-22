import RedButton from "../../../components/RedButton";
import styles from "./styles.module.scss";
import png from "../../../assets/JornadaPrincipiosPage6Img.png";

export default function JornadaPrincipiosPage6() {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.containerSection}>
        <div className={styles.containerSectionFlex}>
          <div className={styles.leftFlex}>
            <h1>
              Parabéns!
              <p>Você ganhou uma medalha de ouro!</p>{" "}
            </h1>
          </div>
          <div>
            <img src={png} alt="" />
          </div>
        </div>
      </section>
      <RedButton path='/jornada/page3'>Receber Medalha</RedButton>
    </div>
  );
}
