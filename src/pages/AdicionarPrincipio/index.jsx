
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./styles.module.css";

import { Link } from "react-router-dom";

export default function AddPrincipio() {

  const [quiz, setQuiz] = useState({
    link_video: "",
    score: 0,
    title: "",
    question: "",
    quiz_type: "principle",
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
      url: "http://127.0.0.1:8000/quiz/game_id?company_id=1",
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
      let alternative = alternativeList[index]
      alternative.is_answer = 0
     setAlternativeList(alternativeList.splice(index, 1, alternative)) 
      console.log(alternativeList)
    }
    console.log(alternativeList)
    
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
      <h1>Adicionar Principios</h1>
      <form>
        <div className={styles["form-group"]}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name"
            defaultValue={quiz.title}
            onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
          />
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
              <input type="number" id="points" name="points"
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
                onChange={(e) => updateTextAlternative(e.target.value, "answer-a")} />
            </div>
            <div className={styles["form-group-label"]}>
              <label htmlFor="radio-a">Resposta correta: </label>
              <input type="radio" id="radio-a" name="answer" value='a'
                onClick={(e) => updateAnswerAlternative(e.target.value)}
              />

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
                onClick={(e) => updateAnswerAlternative(e.target.value)} />
            </div>
          </div>
        </div>

        <div className={styles["form-group"]}>
          <div className={styles["form-group-inline"]}>
            <div className={styles["form-group-long"]}>
              <label htmlFor="answer-a">Resposta - Alternativa C:</label>
              <input type="text" id="answer-c" name="answer-c"
                onChange={(e) => updateTextAlternative(e.target.value, "answer-c")} />
            </div>
            <div className={styles["form-group-label"]}>
              <label htmlFor="radio-c">Resposta correta:</label>
              <input type="radio" id="radio-c" name="answer" value='c'
                onClick={(e) => updateAnswerAlternative(e.target.value)} />
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