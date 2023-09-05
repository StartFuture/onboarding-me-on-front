import { Routes, Route, useLocation } from "react-router-dom";
import UsersMenu from "./pages/UsersMenu";
import Gamifield from "./pages/Gamifield";
import Minigame from "./pages/Minigame";
import AddCultura from "./components/AdicionarCultura";
import AddPrincipio from "./components/Adicionar Principio";
import Congrats from "./pages/Congrats";
import MinigameChose from "./pages/MinigameChose";
import PreChose from "./pages/PreChose";
import Respeito from "./pages/Respeito";
import SocialMedia from "./pages/Ferramentas";
import NovaPaginaTabs from "./pages/NovaPaginaTabs";
import VideoPrincipios from "./pages/VideoPrincipios";
import Layout from "./layouts/Layout";

import JornadaWrapperPage from "./pages/JornadaWrapper";
import JornadaPage2 from "./components/JornadaPage2";
import JornadaPage1 from "./components/JornadaPage1";
import JornadaPage3 from "./components/JornadaPage3";
import JornadaPage4 from "./components/JornadaPage4";
import Ferramentas from "./pages/Ferramentas";
import FerramentasCongratsPage from "./components/FerramentasCongratsPage";

import WelcomeKitWrapper from "./pages/WelcomeKitWrapper";
import WelcomeKitPage1 from "./components/WelcomeKitPage1";
import WelcomeKitPage2 from "./components/WelcomeKitPage2";
import WelcomeKitPage3 from "./components/WelcomeKitPage3";
import WelcomeKitPage4 from "./components/WelcomeKitPage4";
import WelcomeKitPage5 from "./components/WelcomeKitPage5";




const AppRoutes = () => {
const location = useLocation()
  return (
 
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
         <Route path="/menu" element={<UsersMenu />} />
         <Route path="/gamifield" element={<Gamifield />} />
         <Route path="/minigame" element={<Minigame />} />
         <Route path="/addcultura" element={<AddCultura />} />
         <Route path="/addprincipio" element={<AddPrincipio />} />
         <Route path="/congrats" element={<Congrats />} />
         <Route path="/minigamechose" element={<MinigameChose />} />
         <Route path="/preChose" element={<PreChose />} />
         <Route path="/respeito" element={<Respeito />} />
         <Route path="/socialmedia" element={<SocialMedia />} />
         <Route path="/novapaginatabs" element={<NovaPaginaTabs />} />
         <Route path="/video-principio" element={<VideoPrincipios />} />
         <Route path="/tabs" element={<NovaPaginaTabs />} />

         
         <Route path="/welcomekit" element={<WelcomeKitWrapper />} />
         <Route path="/welcomekit/page1" element={<WelcomeKitPage1 />} />
         <Route path="/welcomekit/page2" element={<WelcomeKitPage2 />} />
         <Route path="/welcomekit/page3" element={<WelcomeKitPage3 />} />
         <Route path="/welcomekit/page4" element={<WelcomeKitPage4 />} />
         <Route path="/welcomekit/page5" element={<WelcomeKitPage5 />} />



         <Route path="/jornada" element={<JornadaWrapperPage />} />
         <Route path="/jornada/page1" element={<JornadaPage1 />} />
         <Route path="/jornada/page2" element={<JornadaPage2 />} />
         <Route path="/jornada/page3" element={<JornadaPage3 />} />
         <Route path="/jornada/page4" element={<JornadaPage4 />} />

         <Route path="/jornada/ferramentas" element={<Ferramentas />} />
         <Route path="/jornada/ferramentas/congrats" element={<FerramentasCongratsPage />} />





       </Route>
      </Routes>

  );
};

export default AppRoutes;

