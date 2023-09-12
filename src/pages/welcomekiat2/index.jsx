import styles from "./styles.module.scss";
import png from '../../assets/20943392 [Convertido] 1.png'

export default function WelcomeKiat2() {
  return (
    <div className={styles.containerFifthSection}>
      <div className={styles.fifthSectionFlex}>
        <div className={styles.fifthSectionFlexContent}>

          
          <div>
            <div className={styles.sectionContentStyling}>
              <h1>Seu kit está sendo preparado e logo será enviado.</h1>
            </div>  

           


          </div>



            <img src={png} alt="" />


       
        </div>


      </div>
    </div>
  )

}