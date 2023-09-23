import { Link } from "react-router-dom";
import styles from "../../pages/jornada/JornadaAdmin/styles.module.scss";
import editPng from "../../assets/Edit.png";
import excluirIcon from "../../assets/Delete.png";

function CultureOption() {
  return (
    <>
      <div className={styles.insideFlexTitleAndBtn}>
        <h3>
          Defina as culturas da empresa. As perguntas aparecerão em
          forma de quiz para o colaborador
        </h3>
      <Link to='/addcultura'>
        <button className={styles.addButtonUpper}>Adicionar</button>
        </Link>
      </div>

      <div className={styles.boxFlex}>
        <div className={styles.boxFlexFirstFlex}>
          <div className={styles.boxFlexIconBordered}>
            <p>10pt</p>
          </div>

          <div className={styles.boxFlexIconInsideFlex}>
            <h3>Respeito</h3>
            <p>A Importância do Respeito nas Relações Humanas</p>
          </div>
        </div>

        <div className={styles.boxFlexButtons}>
          <img src={editPng} alt="pencil--v1"/>
          <img src={excluirIcon} alt="trash" />
        </div>
      </div>
      <Link to="/addcultura">
        <button className={styles.addButtonDown}>Adicionar</button>
      </Link>
    </>
  );
}

export default CultureOption;
