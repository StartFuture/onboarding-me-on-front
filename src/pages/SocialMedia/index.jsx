import Navbar from "../../components/navbar/Navbar";
import styles from "./styles.module.scss";
import Sidebar from "../../components/sidebar/Sidebar";

export default function SocialMedia() {
  return (
    <div className={styles.containerThirdSection}>
      {/* ... your third section content ... */}
      <Navbar />
      <Sidebar />
      <h1>Ferramentas do Dia a Dia</h1>

      <h5>
        Ganhe pontos ao instalar e vincular as ferramentas que você irá usar no
        dia a dia
      </h5>

      <div className={styles.thirdSectionContent}>
        <p>Comunicação</p>

        <div className={styles.boxFlex}>
          <div className={styles.boxFlexIcon}>
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
              alt=""
            />
            <p>Discord</p>
          </div>

          <div className={styles.boxFlexButtons}>
            <button className={styles.buttonBaixar}>Baixar</button>
            <button className={styles.buttonVincular}>Vincular</button>
          </div>
        </div>

        <div className={styles.boxFlex}>
          <div className={styles.boxFlexIcon}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111674.png"
              alt=""
            />
            <p>Slack</p>
          </div>

          <div className={styles.boxFlexButtons}>
            <button className={styles.buttonBaixar}>Baixar</button>
            <button className={styles.buttonVincular}>Vincular</button>
          </div>
        </div>

        <p>Design</p>

        <div className={styles.boxFlex}>
          <div className={styles.boxFlexIcon}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
              alt=""
            />
            <p>Figma</p>
          </div>

          <div className={styles.boxFlexButtons}>
            <button className={styles.buttonBaixar}>Baixar</button>
            <button className={styles.buttonVincular}>Vincular</button>
          </div>
        </div>
      </div>
    </div>
  );
}
