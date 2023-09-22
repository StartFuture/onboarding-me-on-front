import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { Link } from "react-router-dom";



export default function AddCultura() {
  const [quiz, setQuiz] = useState({
    link_video: "",
    score: 0,
    title: "",
    question: "",
    quiz_type: "culture",
    game_id: 0,
    alternatives: []
  });

  let alternative = {
    text: "",
    is_answer: 0
  }
  const [alternativeList, setAlternativeList] = useState([alternative, alternative, alternative, alternative])

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/quiz/game_id=?company_id=1",
    })
      .then((response) => {
        setQuiz({ ...quiz, game_id: response.data.id });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addQuiz = () => {
    axios({
      method: "POST",
      url: "http://localhost:8000/quiz/register",
      data: quiz
    })
      .then((response) => {
        console.log('Deu certo');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateAnswerAlternative = (radioSelect) => {
    for (let index in alternativeList) {
      alternativeList[index].is_answer = 0
      setAlternativeList(alternativeList.splice(index, 1, alternative))
    }

    switch (radioSelect) {
      case 'a':
        alternativeList[0].is_answer = 1
        break;
      case 'b':
        alternativeList[1].is_answer = 1
        break;
      case 'c':
        alternativeList[2].is_answer = 1
        break;
      case 'd':
        alternativeList[3].is_answer = 1
        break;
      default:
        break;
    }
    console.log(alternativeList)
    setQuiz({ ...quiz, alternatives: alternativeList })
  }
  const updateTextAlternative = (text, id) => {
    switch (id) {
      case 'answer-a':
        alternativeList[0].text = text
        break;
      case 'answer-b':
        alternativeList[1].text = text
        break;
      case 'answer-c':
        alternativeList[2].text = text
        break;
      case 'answer-d':
        alternativeList[3].text = text
        break;
      default:
        break;
    }
    setQuiz({ ...quiz, alternatives: alternativeList })
  }

  return (
    <div className={styles.container}>
      <h1>Adicionar Cultura</h1>
      <form>
        <div className={styles["form-group"]}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles["form-group"]}>
          <div className={styles["form-group-inline"]}>
            <div className={styles["form-group"]}>
              <label htmlFor="video-link">Link do vídeo para consulta:</label>
              <input type="text" id="video-link" name="video-link" required />
            </div>
            <div className={styles["form-group "]}>
              <label htmlFor="points">Pontos:</label>
              <input type="number" id="points" name="points" required />
            </div>
          </div>
        </div>
        <div className={styles["form-frame"]} />
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
              <label htmlFor="radio-a">Resposta correta:</label>
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
  );
}
