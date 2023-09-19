import {NavLink} from "react-router-dom";
import styles from "./styles.module.scss";

export default function WelcomeKitPage5() {
  return (
    <>
      <div className={styles.containerFifthSectionNormal}>
        <h1>O que você achou do Welcome Kit?</h1>

        <p>Com qual nota você avalia?</p>

        <form className={styles.form} action="">
          <div className={styles.radioDiv}>
            <input type="radio" name="0" id="0" />
            <label htmlFor="0">0</label>

            <input type="radio" name="1" id="1" />
            <label htmlFor="1">1</label>

            <input type="radio" name="2" id="2" />
            <label htmlFor="2">2</label>

            <input type="radio" name="3" id="3" />
            <label htmlFor="3">3</label>

            <input type="radio" name="4" id="4" />
            <label htmlFor="4">4</label>

            <input type="radio" name="5" id="5" />
            <label htmlFor="5">5</label>

            <input type="radio" name="6" id="6" />
            <label htmlFor="6">6</label>

            <input type="radio" name="7" id="7" />
            <label htmlFor="7">7</label>

            <input type="radio" name="8" id="8" />
            <label htmlFor="8">8</label>

            <input type="radio" name="9" id="9" />
            <label htmlFor="9">9</label>

            <input type="radio" name="10" id="10" />
            <label htmlFor="10">10</label>
          </div>
          <label className={styles.labelComentario} htmlFor="comentario">
            Comentário:
          </label>
          <textarea
            placeholder="Digite aqui"
            name="comentario"
            id="comentario"
          />
        </form>
        <NavLink className={styles.navLink} to="/welcomekit/page5">
          Enviar
        </NavLink>
      </div>
      <div className={styles.containerFifthSectionResponsive}>
        <h1>O que você achou do Welcome Kit?</h1>
        <label htmlFor="options">Com qual nota você avalia?</label>
        <select
          className={styles.selectForm}
          name="options"
          id="options"
          form="options">
          <option value="Digite aqui" placeholder="Digite aqui">
            Digite aqui
          </option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <label
          className={styles.comentarioResponsivoLabel}
          htmlFor="comentarioResponsive">
          Comentário
        </label>
        <input
          className={styles.comentarioResponsivoInput}
          type="text"
          placeholder="Digite aqui"
        />
        <NavLink className={styles.navLink} to="/welcomekit/page5">
          Enviar
        </NavLink>
      </div>
    </>
  );
}
