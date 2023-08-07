import styles from "./style.module.css"

function Home() {
    return (
<>
<div className={styles.container}>
        <h1>Adicionar Cultura</h1>
        <form>
          <div className={styles['form-group']}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles['form-group']}>
            <div className={styles['form-group-inline']}>
              <div className={styles['form-group']}>
                <label htmlFor="video-link">Link do vídeo para consulta</label>
                <input type="text" id="video-link" name="video-link" required />
              </div>
              <div className={styles['form-group-points']}>
                <label htmlFor="points">Pontos</label>
                <input type="number" id="points" name="points" required />
              </div>
            </div>
          </div>
          <div className={styles['form-frame']}></div>
          <div className={styles['form-group']}>
            <label htmlFor="question">Pergunta</label>
            <input type="text" id="question" name="question" required />
          </div>
          <div className={styles['form-group']}>
            <div className={styles['form-group-inline']}>
              <div className={styles['form-group']}>
                <label htmlFor="answer-a">Resposta - Alternativa A</label>
                <input className={styles['input-resposta']} type="text" id="answer-a" name="answer-a" required />
              </div>
              <div className={styles['form-group']}>
                <div className={styles['form-group-resposta']}>
                    
                <input type="radio" id="radio-a" name="answer" required />
                <label htmlFor="radio-a" className={styles['form-resposta-label']}>Resposta correta</label>
              
                </div>
            
              </div>
            </div>
          </div>
          <div className={styles['form-group']}>
            <div className={styles['form-group-inline']}>
              <div className={styles['form-group']}>
                <label htmlFor="answer-a">Resposta - Alternativa B</label>
                <input className={styles['input-resposta']} type="text" id="answer-a" name="answer-a" required />
              </div>
              <div className={styles['form-group']}>
                <div className={styles['form-group-resposta']}>
                    
                <input type="radio" id="radio-a" name="answer" required />
                <label htmlFor="radio-a" className={styles['form-resposta-label']}>Resposta correta</label>
              
                </div>
            
              </div>
            </div>
          </div>
          <div className={styles['form-group']}>
            <div className={styles['form-group-inline']}>
              <div className={styles['form-group']}>
                <label htmlFor="answer-a">Resposta - Alternativa C</label>
                <input className={styles['input-resposta']} type="text" id="answer-a" name="answer-a" required />
              </div>
              <div className={styles['form-group']}>
                <div className={styles['form-group-resposta']}>
                    
                <input type="radio" id="radio-a" name="answer" required />
                <label htmlFor="radio-a" className={styles['form-resposta-label']}>Resposta correta</label>
              
                </div>
            
              </div>
            </div>
          </div>
          <div className={styles['form-group']}>
            <div className={styles['form-group-inline']}>
              <div className={styles['form-group']}>
                <label htmlFor="answer-a">Resposta - Alternativa D</label>
                <input className={styles['input-resposta']} type="text" id="answer-a" name="answer-a" required />
              </div>
              <div className={styles['form-group']}>
                <div className={styles['form-group-resposta']}>
                    
                <input type="radio" id="radio-a" name="answer" required />
                <label htmlFor="radio-a" className={styles['form-resposta-label']}>Resposta correta</label>
              
                </div>
            
              </div>
            </div>
          </div>
          {/* Repita o bloco acima mais 3 vezes para as demais alternativas (B, C, D, etc.) */}
          {/* Botão de Envio */}
          <div className={styles['form-group-button']}>
          <button className={styles['cancelar-button']}>
              Cancelar
            </button>
            <span style={{ margin: '10px' }}></span>
            <button type="submit" className={styles['submit-button']}>
              Salvar
            </button>
          </div>
          {/* Fim do Formulário */}
        </form>
      </div> 
   
</>
    )
}

export default Home;

