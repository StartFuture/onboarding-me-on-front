import {NavLink} from "react-router-dom";
import styles from "./styles.module.scss";
import png from "../../assets/JornadaPrincipiosPage6Img.png";

export default function FerramentasCongratsPage2() {
  return (
    <section className={styles.containerSection}>
      <div className={styles.containerSectionFlex}>
        <div className={styles.leftFlex}>
          <h1>
            Parabéns!
            <p>Você ganhou uma medalha de ouro!</p>{" "}
          </h1>

          <NavLink className={styles.navLink}>Receber Medalha</NavLink>
        </div>

        <div>
          <img src={png} alt="" />
        </div>
      </div>
    </section>
  );
}
