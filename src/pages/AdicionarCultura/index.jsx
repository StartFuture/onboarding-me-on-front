import Navbar from "../../components/navbar/Navbar";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
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
  const [alternative, setAlternative] = useState({
    text: "",
    is_answer: 0
  })
  const [alternativeList, setAlternativeList] = useState([alternative, alternative, alternative, alternative])

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/quiz/game_id?company_id=1",
    })
      .then((response) => {
        setQuiz({ ...quiz, game_id: response.data.id });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addCompany = () => {
    axios({
      method: "POST",
      url: "http://localhost:8000/quiz/register",
      data: quiz
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addAlternative = (input) => {
    setAlternative({ ...alternative, text: input });
    alternativeList.push(alternative)
  }

  const updateAnswerAlternative = (radioSelect) => {
    switch (radioSelect) {
      case 'a':
        break;
      case 'b':
        break;
      case 'c':
        break;
      case 'd':
        break;
      default:
        break;
    }
  }


  return (
    <div className={styles.container}>
      <h1>Adicionar Cultura</h1>
      <form>
        <div className={styles["form-group"]}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name"
            defaultValue={quiz.title}
            onChange={(e) => setQuiz({ ...quiz, title: e.target.value })} />
        </div>
        <div className={styles["form-group"]}>
          <div className={styles["form-group-inline"]}>
            <div className={styles["form-group"]}>
              <label htmlFor="video-link">Link do vídeo para consulta:</label>
              <input type="text" id="video-link" name="video-link"
                defaultValue={quiz.link_video}
                onChange={(e) => setQuiz({ ...quiz, link_video: e.target.value })} />
            </div>
            <div className={styles["form-group "]}>
              <label htmlFor="points">Pontos:</label>
              <input type="number" id="points" name="points" required 
              defaultValue={quiz.score}
              onChange={(e) => setQuiz({ ...quiz, score: e.target.value })} />
            </div>
          </div>
        </div>
        <div className={styles["form-frame"]}></div>
        <div className={styles["form-group"]}>
          <label htmlFor="question">Pergunta:</label>
          <input type="text" id="question" name="question"
            defaultValue={quiz.question}
            onChange={(e) => setQuiz({ ...quiz, question: e.target.value })} />
        </div>
        <div className={styles["form-group"]}>
          <div className={styles["form-group-inline"]}>
            <div className={styles["form-group-long"]}>
              <label htmlFor="answer-a">Resposta - Alternativa A:</label>
              <input type="text" id="answer-a" name="answer-a"
                onChange={(e) => updateTextAlternative(e.target.value, "answer-a")}/>
            </div>
            <div className={styles["form-group-label"]}>
              <label htmlFor="radio-a">Resposta correta:</label>
              <input type="radio" id="radio-a" name="answer" value='a'
                onClick={(e) => updateAnswerAlternative(e.target.value)} />
            </div>
          </div>
        </div>

        <div className={styles["form-group"]}>
          <div className={styles["form-group-inline"]}>
            <div className={styles["form-group-long"]}>
              <label htmlFor="answer-a">Resposta - Alternativa B:</label>
              <input type="text" id="answer-b" name="answer-b"
                onChange={(e) => updateTextAlternative(e.target.value, "answer-b")} />
            </div>
            <div className={styles["form-group-label"]}>
              <label htmlFor="radio-b">Resposta correta:</label>
              <input type="radio" id="radio-b" name="answer" value='b'
                onClick={(e) => updateAnswerAlternative(e.target.value)}/>
            </div>
          </div>
        </div>

        <div className={styles["form-group"]}>
          <div className={styles["form-group-inline"]}>
            <div className={styles["form-group-long"]}>
              <label htmlFor="answer-a">Resposta - Alternativa C:</label>
              <input type="text" id="answer-c" name="answer-c"
                onChange={(e) => updateTextAlternative(e.target.value, "answer-c")}/>
            </div>
            <div className={styles["form-group-label"]}>
              <label htmlFor="radio-c">Resposta correta:</label>
              <input type="radio" id="radio-c" name="answer" value='c'
                onClick={(e) => updateAnswerAlternative(e.target.value)}  />
            </div>
          </div>
        </div>

        <div className={styles["form-group"]}>
          <div className={styles["form-group-inline"]}>
            <div className={styles["form-group-long"]}>
              <label htmlFor="answer-d">Resposta - Alternativa D:</label>
              <input type="text" id="answer-d" name="answer-d"
                onChange={(e) => updateTextAlternative(e.target.value, "answer-d")} />
            </div>
            <div className={styles["form-group-label"]}>
              <label htmlFor="radio-a">Resposta correta:</label>
              <input type="radio" id="radio-d" name="answer" value='d'
                onClick={(e) => updateAnswerAlternative(e.target.value)} />
            </div>
          </div>
        </div>
        <div className={styles["form-group-button"]}>
          <Link to='/menu'>
            <button type="submit" className={styles["cancel-button"]}>
              Cancelar
            </button>
          </Link>

          <button type="submit" className={styles["submit-button"]}
          onClick={(e) => addQuiz()}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
