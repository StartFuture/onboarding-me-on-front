import RedButton from "../../../components/RedButton";
import styles from "./styles.module.scss";
import png from "../../../assets/svg/FerramentasMedal.svg";
import { Link } from "react-router-dom";


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

      <RedButton path='/jornada/page3'>
          Receber Medalha
      </RedButton>

    </div>

  );
}
