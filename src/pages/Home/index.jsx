import styles from "./styles.module.scss";
import React, { useState } from "react";

function Home() {
  const [showFirstForm, setShowFirstForm] = useState(true);
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);
  const [showFourthSection, setShowFourthSection] = useState(false);
  const [showFifthSection, setShowFifthSection] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Check if the form data is valid before switching to the second form
    const formData = new FormData(event.target);
    if (
      formData.get("name") &&
      formData.get("video-link") &&
      formData.get("points")
    ) {
      if (showFirstForm) {
        setShowFirstForm(false);
        setShowSecondForm(true);
      } else if (showSecondForm) {
        setShowSecondForm(false);
        setShowThirdSection(true);
      } else if (showThirdSection) {
        setShowThirdSection(false);
        setShowFourthSection(true);
      } else if (showFourthSection) {
        setShowFourthSection(false);
        setShowFifthSection(true);
      }
    }
  };

  const handleSecondFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    if (
      formData.get("name") &&
      formData.get("video-link") &&
      formData.get("points")
    ) {
      if (showFirstForm) {
        setShowFirstForm(false);
        setShowSecondForm(true);
      } else if (showSecondForm) {
        setShowSecondForm(false);
        setShowThirdSection(true);
      } else if (showThirdSection) {
        setShowThirdSection(false);
        setShowFourthSection(true);
      }
    }
    // Lógica para enviar o segundo formulário, se necessário
  };

  return (
    <>
      {showFirstForm && (
        <div className={styles.container}>
          <h1>Adicionar Cultura</h1>
          <form onSubmit={handleFormSubmit}>
            <div className={styles["form-group"]}>
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" required placeholder="Digite aqui"/>
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
                    required placeholder="Digite aqui"                  />
                </div>
                <div className={styles["form-group "]}>
                  <label htmlFor="points">Pontos:</label>
                  <input type="number" id="points" name="points" required placeholder="Digite aqui"/>
                </div>
              </div>
            </div>
            <div className={styles["form-frame"]}></div>
            <div className={styles["form-group"]}>
              <label htmlFor="question">Pergunta:</label>
              <input type="text" id="question" name="question" required placeholder="Digite aqui"/>
            </div>
            <div className={styles["form-group"]}>
              <div className={styles["form-group-inline"]}>
                <div className={styles["form-group-long"]}>
                  <label htmlFor="answer-a">Resposta - Alternativa A:</label>
                  <input type="text" id="answer-a" name="answer-a" required placeholder="Digite aqui"/>
                </div>
                <div className={styles["form-group-label"]}>
                  <label htmlFor="radio-a">Resposta correta</label>
                  <input type="radio" id="radio-a" name="answer" required placeholder="Digite aqui"/>
                </div>
              </div>
            </div>

            <div className={styles["form-group"]}>
              <div className={styles["form-group-inline"]}>
                <div className={styles["form-group-long"]}>
                  <label htmlFor="answer-a">Resposta - Alternativa B:</label>
                  <input type="text" id="answer-b" name="answer-b" required placeholder="Digite aqui" />
                </div>
                <div className={styles["form-group-label"]}>
                  <label htmlFor="radio-b">Resposta correta</label>
                  <input type="radio" id="radio-b" name="answer" required placeholder="Digite aqui"/>
                </div>
              </div>
            </div>

            <div className={styles["form-group"]}>
              <div className={styles["form-group-inline"]}>
                <div className={styles["form-group-long"]}>
                  <label htmlFor="answer-a">Resposta - Alternativa C:</label>
                  <input type="text" id="answer-c" name="answer-c" required placeholder="Digite aqui"/>
                </div>
                <div className={styles["form-group-label"]}>
                  <label htmlFor="radio-c">Resposta correta</label>
                  <input type="radio" id="radio-c" name="answer" required placeholder="Digite aqui"/>
                </div>
              </div>
            </div>

            <div className={styles["form-group"]}>
              <div className={styles["form-group-inline"]}>
                <div className={styles["form-group-long"]}>
                  <label htmlFor="answer-d">Resposta - Alternativa D:</label>
                  <input type="text" id="answer-d" name="answer-d" required placeholder="Digite aqui" />
                </div>
                <div className={styles["form-group-label"]}>
                  <label htmlFor="radio-a">Resposta correta</label>
                  <input type="radio" id="radio-d" name="answer" required placeholder="Digite aqui"/>
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
                Salvar
              </button>
            </div>
            {/* Fim do Formulário */}
          </form>
        </div>
      )}

      {showSecondForm && (
        <div className={styles.container}>
          <h1>Adicionar Princípio</h1>
          <form onSubmit={handleSecondFormSubmit}>
            <div className={styles["form-group"]}>
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" required placeholder="Digite aqui"/>
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
                    required placeholder="Digite aqui"                  />
                </div>
                <div className={styles["form-group "]}>
                  <label htmlFor="points">Pontos:</label>
                  <input type="number" id="points" name="points" required placeholder="Digite aqui"/>
                </div>
              </div>
            </div>
            <div className={styles["form-frame"]}></div>
            <div className={styles["form-group"]}>
              <label htmlFor="question">Pergunta:</label>
              <input type="text" id="question" name="question" required placeholder="Digite aqui"/>
            </div>
            <div className={styles["form-group"]}>
              <div className={styles["form-group-inline"]}>
                <div className={styles["form-group-long"]}>
                  <label htmlFor="answer-a">Resposta - Alternativa A:</label>
                  <input type="text" id="answer-a" name="answer-a" required placeholder="Digite aqui"/>
                </div>
                <div className={styles["form-group-label"]}>
                  <label htmlFor="radio-a">Resposta correta</label>
                  <input type="radio" id="radio-a" name="answer" required placeholder="Digite aqui"/>
                </div>
              </div>
            </div>

            <div className={styles["form-group"]}>
              <div className={styles["form-group-inline"]}>
                <div className={styles["form-group-long"]}>
                  <label htmlFor="answer-a">Resposta - Alternativa B:</label>
                  <input type="text" id="answer-b" name="answer-b" required placeholder="Digite aqui"/>
                </div>
                <div className={styles["form-group-label"]}>
                  <label htmlFor="radio-b">Resposta correta</label>
                  <input type="radio" id="radio-b" name="answer" required placeholder="Digite aqui"/>
                </div>
              </div>
            </div>

            <div className={styles["form-group"]}>
              <div className={styles["form-group-inline"]}>
                <div className={styles["form-group-long"]}>
                  <label htmlFor="answer-a">Resposta - Alternativa C:</label>
                  <input type="text" id="answer-c" name="answer-c" required placeholder="Digite aqui"/>
                </div>
                <div className={styles["form-group-label"]}>
                  <label htmlFor="radio-c">Resposta correta</label>
                  <input type="radio" id="radio-c" name="answer" required placeholder="Digite aqui"/>
                </div>
              </div>
            </div>

            <div className={styles["form-group"]}>
              <div className={styles["form-group-inline"]}>
                <div className={styles["form-group-long"]}>
                  <label htmlFor="answer-d">Resposta - Alternativa D:</label>
                  <input type="text" id="answer-d" name="answer-d" required placeholder="Digite aqui"/>
                </div>
                <div className={styles["form-group-label"]}>
                  <label htmlFor="radio-a">Resposta correta</label>
                  <input type="radio" id="radio-d" name="answer" required placeholder="Digite aqui"/>
                </div>
              </div>
            </div>
            {/* Repita o bloco acima mais 3 vezes para as demais alternativas (B, C, D, etc.) */}
            {/* Botão de Envio */}
            <div className={styles["form-group-button"]}>
              <button className={styles["cancel-button"]}>Cancelar</button>

              <button type="submit" className={styles["submit-button"]}>
                Salvar
              </button>
            </div>
            {/* Fim do Formulário */}
          </form>
        </div>
      )}

      {showThirdSection && (
        <div className={styles.containerThirdSection}>
          {/* ... your third section content ... */}

          <h1>
            Olá, Usuário.
            <br />
            Boas-vindas à Jornada Gamificada da Empresa Nova
          </h1>

          <h5>Agora, leia o tutorial de como conquistar suas medalhas</h5>

          <div className={styles.thirdSectionContent}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
              aliquid laudantium ad nam voluptas facere incidunt eius,
              repudiandae ipsum quis fugiat obcaecati amet fuga! Tempora ab
              exercitationem assumenda fuga ipsam nisi itaque obcaecati,
              voluptatibus impedit maxime quam aut dignissimos eos? Consequatur
              voluptatibus eaque saepe rerum nisi itaque quam dolorum dolore
              aperiam impedit officiis eveniet quisquam animi iure, fuga quod
              fugit numquam esse mollitia ullam facilis repudiandae molestias.
              Eligendi commodi unde rem ratione, iure quod ipsum possimus quos
              ea illo ab velit soluta expedita recusandae dolorem adipisci
              necessitatibus alias atque rerum at incidunt? Dolore sequi harum
              nisi iure natus necessitatibus deleniti id, nesciunt provident
              sapiente placeat exercitationem tenetur aspernatur eum quae. Sed
              corrupti ullam, tempore itaque voluptate, blanditiis quae
              reiciendis veniam sint quis veritatis reprehenderit ipsum maxime
              et recusandae vitae iste commodi neque quasi, dolorum repellendus
              ex exercitationem? Ab, amet eius nulla sit quos numquam velit
              itaque impedit rem quaerat obcaecati natus aspernatur, magni
              ducimus. Itaque assumenda rerum nulla pariatur, ipsum architecto
              necessitatibus, qui autem provident soluta minima magni
              repudiandae accusamus aspernatur voluptas laborum id numquam
              repellat mollitia? Tempore, iusto eos nemo nobis dicta cupiditate
              aperiam provident praesentium non eligendi molestias, optio
              exercitationem? Nesciunt culpa delectus, ratione illo nam est at
              exercitationem optio praesentium deserunt accusamus accusantium,
              obcaecati blanditiis? Consequuntur, consectetur? Aut dolores at
              excepturi unde impedit distinctio quae sapiente quidem,
              perspiciatis a optio tempora cumque tempore quas nostrum placeat
              officiis eius quia nihil veniam. Velit perspiciatis iste dolorum.
              Dolorem, aut! Impedit dolorem quam, dolor porro velit ducimus,
              explicabo modi repellat numquam molestiae quos laborum vel labore
              nesciunt iusto pariatur ullam est facilis tenetur eligendi
              assumenda. Optio dolorum quia aut. Quisquam veritatis, quam quae
              velit, accusamus dignissimos at aut ut quo quos, architecto eum
              eveniet odio deleniti! Deserunt exercitationem facere, illum
              accusamus qui incidunt inventore vel, suscipit, laudantium aut
              commodi. Harum nam necessitatibus numquam et dolores aut hic, in,
              sed recusandae ratione dolore rem laboriosam laborum quia
              cupiditate quae provident expedita.
            </p>

            <button
              type="button"
              onClick={() => {
                setShowThirdSection(false);
                setShowFourthSection(true);
              }}
            >
              Confirmar
            </button>
          </div>
        </div>
      )}

      {showFourthSection && (
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
            onClick={() => {
              setShowFourthSection(false);
              setShowFifthSection(true);
            }}
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
            onClick={() => {
              setShowFourthSection(false);
              setShowFifthSection(true);
            }}
          >
            Iniciar
          </button>

            </div>

          </div>




         
        </div>
      )}

      {showFifthSection && (
        <div className={styles.container}>
          {/* ... your fifth section content ... */}
        </div>
      )}
    </>
  );
}

export default Home;
