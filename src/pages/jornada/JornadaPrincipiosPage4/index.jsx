import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

export default function JornadaPrincipiosPage4() {
  return (
    <div className={styles.containerThirdSection}>
      <h1>Inclusão</h1>

      <h5>A Importância da Inclusão Social</h5>

      <div className={styles.thirdSectionContent}>
        <div>
          <form action="">
            <div className={styles.insideFormFlex}>
              <div>
                <input type="radio" name="option" value="a" id="a" />
                <label htmlFor="a">A)  A inclusão social é fundamental para garantir que todas as pessoas tenham igualdade de oportunidades, independentemente de sua origem, raça, gênero, habilidades ou outras características.</label>
              </div>

              <div>
                <input type="radio" name="option" value="b" id="b" />
                <label htmlFor="b">B) A inclusão social promove a diversidade e o respeito às diferenças, criando uma sociedade mais justa e equitativa.</label>
              </div>

              <div>
                <input type="radio" name="option" value="c" id="c" />
                <label htmlFor="c">C) Através da inclusão, as pessoas com deficiência podem participar plenamente da vida em comunidade, contribuindo com suas habilidades e talentos.</label>
              </div>

              <div>
                <input type="radio" name="option" value="d" id="d" />
                <label htmlFor="d">D) A inclusão é crucial no ambiente de trabalho, pois permite que todos os funcionários, independentemente de suas características, contribuam para o sucesso da empresa.</label>
              </div>
            </div>
          </form>
        </div>

        <div className={styles.flexButtons}>
          <Link to="/jornada/principios/page3">
            <button className={styles.buttonAnterior} type="button">
              Anterior
            </button>
          </Link>

          <Link to="/jornada/principios/page5">
            <button className={styles.buttonProximo} type="button">
              Próximo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
