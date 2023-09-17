import styles from "./styles.module.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";


export default function Respeito() {

  return (
    <div className={styles.containerThirdSection}>
      <Navbar />
      <Sidebar />
      
      <h1>
        Respeito
      </h1>

      <h5>  
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
        aliquid laudantium ad nam voluptas facere incidunt eius,
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
        aliquid laudantium ad nam voluptas facere incidunt eius,
      </h5>

      <div className={styles.thirdSectionContent}>
        <div>
          <form action="">
            <div className={styles.insideFormFlex}>
              <div>
                <input type="radio" />
                <label htmlFor="">A) Lorem Ipsum</label>
              </div>
              <div>
                <input type="radio" />
                <label htmlFor="">B) Lorem Ipsum</label>
              </div>
              <div>
                <input type="radio" />
                <label htmlFor="">C) Lorem Ipsum</label>
              </div>
              <div>
                <input type="radio" />
                <label htmlFor="">D) Lorem Ipsum</label>
              </div>
            </div>
          </form>
        </div>

        <div className={styles.flexButtons}>
          <button className={styles.buttonAnterior}
            type="button" >
            <a href="/video-principio">
              Anterior </a>
          </button>

          <button className={styles.buttonProximo}
            type="button">
            <a href="#">
              Próximo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

