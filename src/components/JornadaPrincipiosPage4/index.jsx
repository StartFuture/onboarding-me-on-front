import {NavLink} from "react-router-dom";
import styles from "./styles.module.scss";

export default function JornadaPrincipiosPage4() {
  return (
    <div className={styles.containerThirdSection}>
      {/* ... your third section content ... */}

      <h1>Inclusão</h1>

      <h5>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, aliquid
        laudantium ad nam voluptas facere incidunt eius, Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Sit, aliquid laudantium ad nam
        voluptas facere incidunt eius,
      </h5>

      <div className={styles.thirdSectionContent}>
        <div>
          <form action="">
            <div className={styles.insideFormFlex}>
              <div>
                <input type="radio" name="option" value="a" id="a" />
                <label htmlFor="a">A) Lorem Ipsum</label>
              </div>

              <div>
                <input type="radio" name="option" value="b" id="b" />
                <label htmlFor="b">B) Lorem Ipsum</label>
              </div>

              <div>
                <input type="radio" name="option" value="c" id="c" />
                <label htmlFor="c">C) Lorem Ipsum</label>
              </div>

              <div>
                <input type="radio" name="option" value="d" id="d" />
                <label htmlFor="d">D) Lorem Ipsum</label>
              </div>
            </div>
          </form>
        </div>

        <div className={styles.flexButtons}>
          <button className={styles.buttonAnterior} type="button">
            <NavLink to="/jornada/principios/page1">Anterior</NavLink>
          </button>

          <button className={styles.buttonProximo} type="button">
            <NavLink to="/jornada/principios/page3">Proximo</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
