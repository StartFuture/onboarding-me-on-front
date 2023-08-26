import Navbar from "../../components/navbar/Navbar";
import SideMenu from "../../components/sidebar/Sidebar";
import styles from "./styles.module.css";

export default function Congrats() {
    return (
      <>      
      <Navbar />
      <SideMenu />
      <div className={styles.containerFifthSection}>
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

          <div className={styles.fifthSectionFlexImgWrapper}></div>

          <button>Receber Medalha</button>
        </div>
      </div>
      </div>
      </>
      
    )
    
}
