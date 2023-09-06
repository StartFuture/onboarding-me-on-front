import { useState, useEffect } from "react";
import styles from "./styles.module.scss"; // Your existing SCSS module
import AddCultura from "../../pages/AdicionarCultura";
import AddPrincipio from "../../pages/Adicionar Principio";
import axios from "axios";
import Lixeira from "../../assets/svg/Lixeira.svg";
import Edicao from "../../assets/svg/Edição.svg";

function RespectForPrincipios() {
  const [principleList, setPrincipleList] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/quiz/?company_id=1",
    })
      .then((response) => {
        setPrincipleList(response.data.filter((q) => q.quiz_type == "principle"))
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [activeSection, setActiveSection] = useState("Normal");

  const handleTabClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  const handleDeletePrinciple = (quizId, gameId) => {
    axios({
      method: "DELETE",
      url: `http://localhost:8000/quiz/delete?quiz_id=${quizId}&game_id=${gameId}&company_id=1`,
    })
    .then(() => {
      setPrincipleList(principleList.filter((principle) => principle.id !== quizId));
    })
    .catch((error) => {
      console.error(error);
    });
  };


  return (
    <>
      {activeSection === "Normal" && (
        <section className="normalSection">
          <div className={styles.insideFlex}>
            <div className={styles.insideFlexTitleAndBtn}>
              <h3>
                Defina as culturas da empresa. As perguntas aparecerão em forma de
                quiz para o colaborador
              </h3>

              <button className={styles.addButtonUpper}>Adicionar</button>
            </div>

            {principleList.map((principle) => (

              <div className={styles.boxFlex}>
                <div className={styles.boxFlexFirstFlex}>
                  <div className={styles.boxFlexIcon}>
                    <p>{principle.score}</p>
                  </div>

                  <div className={styles.boxFlexIconInsideFlex}>
                    <h3>{principle.title}</h3>
                    <p>{principle.question}</p>
                  </div>
                </div>

                <div className={styles.boxFlexButtons}>
                  <a onClick={() => handleTabClick("AddCultura")}>
                    <img
                      src={Edicao}
                      alt="pencil--v1"
                    />
                  </a>
                  <img
                    src={Lixeira}
                    alt="trash"
                    onClick={() => handleDeletePrinciple(principle.id, principle.game_id)}
                  />
                </div>
              </div>
            ))}



            <button className={styles.addButtonDown}>Adicionar</button>


          </div>


        </section>

      )}


      {activeSection === "AddCultura" && (
        <section className="AddCultura">
          <AddPrincipio />

        </section>

      )}


    </>
  )
}

export default RespectForPrincipios