import { useState, useEffect } from "react";
import styles from "./styles.module.scss"; // Your existing SCSS module
import AddCultura from "../../pages/AdicionarCultura";
import axios from "axios";

function RespectForCultura() {
  const [cultureList, setCultureList] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/quiz/?company_id=1",
    })
      .then((response) => {
        setCultureList(response.data.filter((q) => q.quiz_type == "culture" )) 
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [activeSection, setActiveSection] = useState("Normal");

  const handleTabClick = (sectionName) => {
    setActiveSection(sectionName);
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

            {cultureList.map((culture) =>(

            <div className={styles.boxFlex}>
              <div className={styles.boxFlexFirstFlex}>
                <div className={styles.boxFlexIcon}>
                  <p>{culture.score}</p>
                </div>

                <div className={styles.boxFlexIconInsideFlex}>
                  <h3>{culture.title}</h3>
                  <p>{culture.question}</p>
                </div>
              </div>

              <div className={styles.boxFlexButtons}>
                <a onClick={() => handleTabClick("AddCultura")}>
                  <img
                    src="https://img.icons8.com/ios-filled/50/pencil--v1.png"
                    alt="pencil--v1"
                  />
                </a>
                <img
                  src="https://img.icons8.com/windows/32/trash.png"
                  alt="trash"
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
          <AddCultura />

        </section>

      )}


    </>
  )
}

export default RespectForCultura