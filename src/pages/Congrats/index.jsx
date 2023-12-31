import Navbar from "../../components/navbar/Navbar";
import styles from "./styles.module.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Congrats() {
  return (
    <div className={styles.containerFifthSection}>
      <Navbar />
      <Sidebar />
      <div className={styles.fifthSectionFlex}>
        <div className={styles.fifthSectionFlexContent}>
          <div className={styles.sectionContentStyling}>
            <h1>
              Parabéns <br /> Game concluído :)
            </h1>
            <p>
              Você ganhou a medalha <br /> Mestre das ferramentas
            </p>
          </div>
          <div className={styles.fifthSectionFlexImgWrapper} />
          <button>Receber Medalha</button>
        </div>
      </div>
    </div>
  );
}
