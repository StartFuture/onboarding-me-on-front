import styles from "./styles.module.scss";
import png from '../../assets/WelcomeKitPage3Frame.png'
import { ThreePointProgressBar } from "./components/WelcomeKitPage2ProgressBar/ProgressBar";
import { NavLink } from "react-router-dom";



export default function WelcomeKitPage3() {
  return (
    <div className={styles.containerFifthSection}>
      <div className={styles.fifthSectionFlex}>
        <div className={styles.fifthSectionFlexContent}>



          
            <ThreePointProgressBar/>
          
          <div>
            <div className={styles.sectionContentStyling}>
              <h1>Seu kit vai  <br /> chegar em breve!</h1>
            </div>  

            <div className={styles.codigoDiv}>
                <p>CÓDIGO DE <br /> RASTREIO:</p>

                <div className={styles.codigoDivNumber}>
                  <p>1234</p>

                </div>

                

              </div>

           <NavLink className={styles.navLink} to="/welcomekit/page4">Clique aqui quando o Kit chegar</NavLink>
                


          </div>



            <img className={styles.imgFrame} src={png} alt="" />


       
        </div>


      </div>
    </div>
  )

}