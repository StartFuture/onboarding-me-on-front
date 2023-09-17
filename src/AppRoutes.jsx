import { Routes, Route, useLocation } from "react-router-dom";
import NovaPaginaTabs from "./pages/NovaPaginaTabs";
import JornadaPage1 from "./pages/JornadaPage1";
import JornadaPage2 from "./pages/JornadaPage2";
import JornadaPage3 from "./pages/JornadaPage3";
import JornadaPage4 from "./pages/JornadaPage4";
import Ferramentas from "./pages/Ferramentas";
import FerramentasCongratsPage from "./pages/FerramentasCongratsPage";
import FerramentasCongratsPage2 from "./pages/FerramentasCongratsPage2";
import JornadaPagePrincipios1 from "./pages/JornadaPrincipiosPage1";
import JornadaPrincipiosPage2 from "./pages/JornadaPrincipiosPage2";
import JornadaPrincipiosPage3 from "./pages/JornadaPrincipiosPage3";
import JornadaPrincipiosPage4 from "./pages/JornadaPrincipiosPage4";
import JornadaPrincipiosPage5 from "./pages/JornadaPrincipiosPage5";
import JornadaPrincipiosPage6 from "./pages/JornadaPrincipiosPage6";
import WelcomeKitWrapper from "./pages/WelcomeKitWrapper";
import WelcomeKitPage1 from "./pages/WelcomeKitPage1";
import WelcomeKitPage2 from "./components/WelcomeKitPage2";
import WelcomeKitPage3 from "./components/WelcomeKitPage3";
import WelcomeKitPage4 from "./components/WelcomeKitPage4";
import WelcomeKitPage5 from "./components/WelcomeKitPage5";


import Minigame from "./pages/Minigame";
import AddCultura from "./pages/AdicionarCultura";
import AddPrincipio from "./pages/AdicionarPrincipio";
import Congrats from "./pages/Congrats";
import Layout from "./layouts/Layout";

import JornadaWrapperPage from "./pages/JornadaWrapper";





function AppRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route path="/jornada/admin" element={<NovaPaginaTabs />} />
        <Route path="/jornada/page1" element={<JornadaPage1 />} />
        <Route path="/jornada/page2" element={<JornadaPage2 />} />
        <Route path="/jornada/page3" element={<JornadaPage3 />} />
        <Route path="/jornada/page4" element={<JornadaPage4 />} />
        <Route path="/jornada/ferramentas" element={<Ferramentas />} />
        <Route path="/jornada/ferramentas/congrats" element={<FerramentasCongratsPage />} />
        <Route path="/jornada/ferramentas/congrats2" element={<FerramentasCongratsPage2 />} />
        <Route path="/jornada/principios/page1" element={<JornadaPagePrincipios1 />} />
        <Route path="/jornada/principios/page2" element={<JornadaPrincipiosPage2 />} />
        <Route path="/jornada/principios/page3" element={<JornadaPrincipiosPage3 />} />
        <Route path="/jornada/principios/page4" element={<JornadaPrincipiosPage4 />} />
        <Route path="/jornada/principios/page5" element={<JornadaPrincipiosPage5 />} />
        <Route path="/jornada/principios/page6" element={<JornadaPrincipiosPage6 />} />
        <Route path="/welcomekit" element={<WelcomeKitWrapper />} />
        <Route path="/welcomekit/page2" element={<WelcomeKitPage2 />} />
        <Route path="/welcomekit/page3" element={<WelcomeKitPage3 />} />
        <Route path="/welcomekit/page4" element={<WelcomeKitPage4 />} />
        <Route path="/welcomekit/page5" element={<WelcomeKitPage5 />} />



        <Route path="/minigame" element={<Minigame />} />
        <Route path="/addcultura" element={<AddCultura />} />
        <Route path="/addprincipio" element={<AddPrincipio />} />
        <Route path="/congrats" element={<Congrats />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/tabs" element={<NovaPaginaTabs />} />

        
        <Route path="/welcomekit/page1" element={<WelcomeKitPage1 />} />
      

        <Route path="/jornada" element={<JornadaWrapperPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
