import {NavLink} from "react-router-dom";
import styles from "./styles.module.scss";

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
      <NavLink className={styles.navLink} to="/jornada/page2">
        Continuar
      </NavLink>
    </div>
  );
}

export default JornadaPage1;
