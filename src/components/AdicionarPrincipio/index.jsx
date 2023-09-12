import Sidebar from "../sidebar/Sidebar";
import styles from "./styles.module.css";


export default function AddPrincipio() {
    return(
 
          <div className={styles.container}>
          <h1>Adicionar Principio</h1>
          <form>
            <div className={styles["form-group"]}>
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles["form-group"]}>
              <div className={styles["form-group-inline"]}>
                <div className={styles["form-group"]}>
                  <label htmlFor="video-link">
                    Link do vídeo para consulta:
                  </label>
                  <input
                    type="text"
                    id="video-link"
                    name="video-link"
                    required
                  />
                </div>
                <div className={styles["form-group "]}>
                  <label htmlFor="points">Pontos:</label>
                  <input type="number" id="points" name="points" required />
                </div>
              </div>
            </div>
            <div className={styles["form-frame"]}></div>
            <div className={styles["form-group"]}>
              <label htmlFor="question">Pergunta:</label>
              <input type="text" id="question" name="question" required />
            </div>
            <div className={styles["form-group"]}>
              <div className={styles["form-group-inline"]}>
                <div className={styles["form-group-long"]}>
                  <label htmlFor="answer-a">Resposta - Alternativa A:</label>
                  <input type="text" id="answer-a" name="answer-a" required />
                </div>
                <div className={styles["form-group-label"]}>
                  <label htmlFor="radio-a">Resposta correta: </label>
                  <input type="radio" id="radio-a" name="answer" required />
                </div>
              </div>
            </div>

            <div className={styles["form-group"]}>
              <div className={styles["form-group-inline"]}>
                <div className={styles["form-group-long"]}>
                  <label htmlFor="answer-a">Resposta - Alternativa B:</label>
                  <input type="text" id="answer-b" name="answer-b" required />
                </div>
                <div className={styles["form-group-label"]}>
                  <label htmlFor="radio-b">Resposta correta:</label>
                  <input type="radio" id="radio-b" name="answer" required />
                </div>
              </div>
            </div>

            <div className={styles["form-group"]}>
              <div className={styles["form-group-inline"]}>
                <div className={styles["form-group-long"]}>
                  <label htmlFor="answer-a">Resposta - Alternativa C:</label>
                  <input type="text" id="answer-c" name="answer-c" required />
                </div>
                <div className={styles["form-group-label"]}>
                  <label htmlFor="radio-c">Resposta correta:</label>
                  <input type="radio" id="radio-c" name="answer" required />
                </div>
              </div>
            </div>

            <div className={styles["form-group"]}>
              <div className={styles["form-group-inline"]}>
                <div className={styles["form-group-long"]}>
                  <label htmlFor="answer-d">Resposta - Alternativa D:</label>
                  <input type="text" id="answer-d" name="answer-d" required />
                </div>
                <div className={styles["form-group-label"]}>
                  <label htmlFor="radio-a">Resposta correta:</label>
                  <input type="radio" id="radio-d" name="answer" required />
                </div>
              </div>
            </div>
            {/* Repita o bloco acima mais 3 vezes para as demais alternativas (B, C, D, etc.) */}
            {/* Botão de Envio */}
            <div className={styles["form-group-button"]}>
              <button type="submit" className={styles["cancel-button"]}>
                Cancelar
              </button>

              <button type="submit" className={styles["submit-button"]}>
                Enviar
              </button>
            </div>
            {/* Fim do Formulário */}
          </form>
        </div>
  
    )
}