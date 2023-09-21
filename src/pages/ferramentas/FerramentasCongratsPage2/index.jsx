import RedButton from "../../../components/RedButton";
import styles from "./styles.module.scss";
import png from "../../../assets/svg/FerramentasMedal.svg";

export default function FerramentasCongratsPage2() {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.containerSection}>
        <div className={styles.containerSectionFlex}>
          <div className={styles.leftFlex}>
            <h1>
              Parabéns!
              <p>Você ganhou uma medalha Mestre das Ferramentas.</p>{" "}
            </h1>
          </div>
          <img src={png} alt="" />
        </div>
      </section>
      <RedButton>Receber Medalha</RedButton>
    </div>
  );
}
