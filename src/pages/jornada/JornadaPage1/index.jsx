import styles from "./styles.module.scss";
import ContinueButton from "../../../components/ContinueButton";

function JornadaPage1() {
  return (
    <div className="main-container">
      <section className={styles.sectionContainer}>
        <h1>
          Olá, Eduardo. <br />
          Boas-vindas à Jornada Gamificada da EmpresaNova.
        </h1>

        <p>Para iniciar, assista o vídeo que preparamos para você.</p>
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
      <ContinueButton path="/jornada/page2" />
    </div>
  );
}

export default JornadaPage1;
