import {NavLink} from "react-router-dom";
import styles from "./styles.module.scss";

export default function JornadaPrincipiosPage2() {
  return (
    <div className={styles.containerThirdSection}>
      {/* ... your third section content ... */}

      <h1>Respeito</h1>

      <h5>
        {" "}
        A Importância do Respeito nas Relações Humanas
      </h5>

      <div className={styles.thirdSectionContent}>
        <div>
          <form action="">
            <div className={styles.insideFormFlex}>
              <div>
                <input type="radio" name="option" value="a" id="a" />
                <label htmlFor="a">A) O respeito é fundamental nas relações humanas, pois promove a empatia e a compreensão mútua entre as pessoas.</label>
              </div>

              <div>
                <input type="radio" name="option" value="b" id="b" />
                <label htmlFor="b">B) Quando praticamos o respeito, criamos um ambiente de confiança e cooperação, o que facilita a resolução de conflitos de maneira pacífica.</label>
              </div>

              <div>
                <input type="radio" name="option" value="c" id="c" />
                <label htmlFor="c">C) O respeito implica aceitar as diferenças e valorizar a diversidade cultural, étnica, religiosa e de gênero, promovendo a inclusão e a igualdade.</label>
              </div>

              <div>
                <input type="radio" name="option" value="d" id="d" />
                <label htmlFor="d">D) Respeitar os direitos individuais e a privacidade dos outros é uma parte importante do respeito, contribuindo para a preservação da dignidade humana.</label>
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
