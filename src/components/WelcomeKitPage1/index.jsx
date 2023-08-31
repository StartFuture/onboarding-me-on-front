import styles from "./styles.module.scss";
import png from '../../assets/Frame 116.png'


export default function WelcomeKitPage1() {


  return (
    <div className={styles.containerFifthSection}>
      <div className={styles.fifthSectionFlex}>
        <div className={styles.fifthSectionFlexContent}>

          
          <div>
            <div className={styles.sectionContentStyling}>
              <h1>Temos um Welcome Kit <br />te esperando...</h1>
            </div>  

            <div className={styles.actionButtonDiv}>
              <button>Eu Quero</button>
            </div>



          </div>



            <img src={png} alt="" />


       
        </div>


      </div>
    </div>
  )

}