import styles from "./styles.module.scss";
import RedButton from "../../../components/RedButton";

function JornadaPagePrincipios1() {
  return (
    <div>
      <section className={styles.sectionContainer}>
        <h1>Inclusão</h1>

        <p>
          Assista ao vídeo e fique por dentro sobre os princípios da EmpresaNova.{" "}
        </p>
        <div className={styles.iframeContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uhNsX7xVXX4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </section>
      <div className={styles.flexButtons}>
        <RedButton path="/jornada/principios/page4">Continuar</RedButton>
      </div>
    </div>
  );
}

export default JornadaPagePrincipios1;
