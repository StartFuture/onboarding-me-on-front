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
                <button
            type="button"
          
        >
            Iniciar
          </button>

            </div>

            <div className={styles.fourthSectionCard}>
                <div className={styles.imageWrapper}>
                    <div className={styles.cardImageLoader}></div>

                </div>
                <button
            type="button"
           
          >
            Iniciar
          </button>

            </div>

          </div>




         
        </div>


  );
}

export default MinigameChose;
