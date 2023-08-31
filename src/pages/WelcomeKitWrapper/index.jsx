import { useState } from 'react'
import WelcomeKitPage1 from '../../components/WelcomeKitPage1';
import WelcomeKitPage2 from '../../components/WelcomeKitPage2';
import rightArrow from '../../assets/rightredarrowpng.png'
import styles from './styles.module.css'


function WelcomeKitWrapper() {

    const [activeSection, setActiveSection] = useState("WelcomeKitPage1");
  
    const handleTabClick = (sectionName) => {
      setActiveSection(sectionName);
    };
  

  return (


    <>
      {activeSection == "WelcomeKitPage1" && (
        <>
          <WelcomeKitPage1 />
          <button className={styles.arrowButton} onClick={() => handleTabClick("WelcomeKitPage2")}><img src={rightArrow} alt="" /></button>
        </>
         
      )}


      {activeSection == "WelcomeKitPage2" && (
        <>
          <WelcomeKitPage2 />
          <button className={styles.arrowButton} onClick={() => handleTabClick("WelcomeKitPage3")}><img src={rightArrow} alt="" /></button>
        </>
         
      )}
    </>
    
   
  )
}

export default WelcomeKitWrapper