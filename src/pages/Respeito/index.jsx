import styles from "./styles.module.scss";

export default function Respeito() {
  return (
    <div className={styles.containerThirdSection}>
      {/* ... your third section content ... */}

      <h1>Respeito</h1>

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
                <input type="radio" />
                <label htmlFor="">A) Lorem Ipsum</label>
              </div>

              <div>
                <input type="radio" />
                <label htmlFor="">B) Lorem Ipsum</label>
              </div>

              <div>
                <input type="radio" />
                <label htmlFor="">C) Lorem Ipsum</label>
              </div>

              <div>
                <input type="radio" />
                <label htmlFor="">D) Lorem Ipsum</label>
              </div>
            </div>
          </form>
        </div>

        <div className={styles.flexButtons}>
          <button className={styles.buttonAnterior} type="button">
            Anterior
          </button>

          <button className={styles.buttonProximo} type="button">
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}
