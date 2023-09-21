import RedButton from "../../../components/RedButton";
import styles from "./styles.module.scss";

function JornadaPagePrincipios1() {
  return (
    <div>
      <section className={styles.sectionContainer}>
      <h1>Respeito</h1>

      <p>
        Assista ao vídeo e fique por dentro sobre as culturas da EmpresaNova.{" "}
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/QXd1JwThTFQ?si=2K5iUrwTZCNVDDso"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </section>
    <RedButton path="/jornada/principios/page2">Continuar</RedButton>
    </div>
  );
}

export default JornadaPagePrincipios1;
