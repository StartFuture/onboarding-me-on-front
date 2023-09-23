import styles from "./styles.module.scss";
import RedButton from "../../../components/RedButton";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import config from "../../../services/config";

function JornadaPage1() {

  const [gameJourney, setGameJourney] = useState({})

  useEffect(() => {
    api.get('/game_journey/get-video', config)
      .then((response) => {
        setGameJourney(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

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
              src={gameJourney.welcome_video_link}
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
