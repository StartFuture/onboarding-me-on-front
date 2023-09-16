import styles from "./styles.module.scss";
import png from "../../assets/Frame 116.png";
import {NavLink} from "react-router-dom";

export default function WelcomeKitPage1() {
  return (
    <section className={styles.containerSection}>
      <div className={styles.containerSectionFlex}>
        <div className={styles.leftFlex}>
          <h1>
            Temos um Welcome Kit <br /> te esperando...
          </h1>
          <NavLink to="/welcomekit/page2" className={styles.navLink}>
            Eu quero
          </NavLink>
        </div>
        <div>
          <img src={png} alt="" />
        </div>
      </div>
    </section>
  );
}
