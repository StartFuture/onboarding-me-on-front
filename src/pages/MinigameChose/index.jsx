
import VideoPrincipios from "../VideoPrincipios";
import styles from "./styles.module.css";



function MinigameChose() {
  
  
  return (
        <div className={styles.containerFourthSection}>
          {/* ... your fourth section content ... */}

          <h1>
            Olá, Usuário.
            <br />
            Boas-vindas à Jornada Gamificada da Empresa Nova
          </h1>

          <h5>Selecione qual mini-game deseja jogar:</h5>

          <div className={styles.fourthSectionFlex}>
            <div className={styles.fourthSectionCard}>
                <div className={styles.imageWrapper}>
                  <div className={styles.cardImageLoader}></div>
                </div>
               <a href="/socialmedia">
                <button
            type="button"
          
        >
            Iniciar
          </button></a>
          
            </div>

            <div className={styles.fourthSectionCard}>
                <div className={styles.imageWrapper}>
                    <div className={styles.cardImageLoader}></div>

                </div>
                <a href="/video-principio">
                <button
            type="button"
           
          >
            Iniciar
          </button>
          </a>
            </div>

          </div>




         
        </div>


  );
}

export default MinigameChose;
