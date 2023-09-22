import styles from "./styles.module.scss";
import RedButton from "../../../components/RedButton";

function JornadaPage1() {
  return (
    <div className={styles.mainContainer}>
        <section className={styles.sectionContainer}>
          <h1>
            Olá, Eduardo. <br />
            Boas-vindas à Jornada Gamificada da Onboarding-me.
          </h1>

          <p>Para iniciar, assista o vídeo que preparamos para você.</p>
        </section>
      <div className={styles.iframeContainer}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/oD3_mMmTIWw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
        </div>
      <RedButton path="/jornada/page2">Continuar</RedButton>
    </div>
  );
}

export default JornadaPage1;
