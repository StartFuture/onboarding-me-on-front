import {Route, Routes, useLocation} from "react-router-dom";
import FerramentasCongratsPage2 from "./pages/ferramentas/FerramentasCongratsPage2";
import Ferramentas from "./pages/ferramentas/FerramentasMain";
import JornadaPage1 from "./pages/jornada/JornadaPage1";
import JornadaPage2 from "./pages/jornada/JornadaPage2";
import JornadaPage3 from "./pages/jornada/JornadaPage3";
import JornadaPage4 from "./pages/jornada/JornadaPage4";
import JornadaPagePrincipios1 from "./pages/jornada/JornadaPrincipiosPage1";
import JornadaPrincipiosPage2 from "./pages/jornada/JornadaPrincipiosPage2";
import JornadaPrincipiosPage3 from "./pages/jornada/JornadaPrincipiosPage3";
import JornadaPrincipiosPage4 from "./pages/jornada/JornadaPrincipiosPage4";
import JornadaPrincipiosPage5 from "./pages/jornada/JornadaPrincipiosPage5";
import JornadaPrincipiosPage6 from "./pages/jornada/JornadaPrincipiosPage6";
import JornadaAdmin from "./pages/jornada/JornadaAdmin";
import WelcomeKitPage1 from "./pages/welcomeKit/WelcomeKitPage1";
import WelcomeKitPage2 from "./pages/welcomeKit/WelcomeKitPage2";
import WelcomeKitPage3 from "./pages/welcomeKit/WelcomeKitPage3";
import WelcomeKitPage4 from "./pages/welcomeKit/WelcomeKitPage4";
import WelcomeKitPage5 from "./pages/welcomeKit/WelcomeKitPage5";
import WelcomeKitWrapper from "./pages/welcomeKit/WelcomeKitWrapper";
import FerramentasCongratsPage from "./pages/ferramentas/FerramentasCongratsPage";
import Login from "./pages/Login/Login";
import EsqueceuSenha from "./pages/EsqueceuSenha/EsqueceuSenha";
import ConfirmacaoCodigo from "./pages/ConfirmacaoCodigo/ConfirmacaoCodigo";
import NovaSenha from "./pages/NovaSenha/NovaSenha";
import AlteracaoSenha from "./pages/AlteracaoSenha/AlteracaoSenha";

import Layout from "./layouts/Layout";
import AddCultura from "./pages/AdicionarCultura";
import AddPrincipio from "./pages/AdicionarPrincipio";
import Minigame from "./pages/Minigame";
import Congrats from "./pages/Congrats";

import JornadaWrapperPage from "./pages/jornada/JornadaWrapper";

function AppRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route path="/jornada/admin" element={<JornadaAdmin />} />
        <Route path="/jornada/page1" element={<JornadaPage1 />} />
        <Route path="/jornada/page2" element={<JornadaPage2 />} />
        <Route path="/jornada/page3" element={<JornadaPage3 />} />
        <Route path="/jornada/page4" element={<JornadaPage4 />} />
        <Route path="/jornada/ferramentas" element={<Ferramentas />} />
        
        <Route
          path="/jornada/ferramentas/congrats"
          element={<FerramentasCongratsPage />}
        />
        <Route
          path="/jornada/ferramentas/congrats2"
          element={<FerramentasCongratsPage2 />}
        />
        <Route
          path="/jornada/principios/page1"
          element={<JornadaPagePrincipios1 />}
        />
        <Route
          path="/jornada/principios/page2"
          element={<JornadaPrincipiosPage2 />}
        />
        <Route
          path="/jornada/principios/page3"
          element={<JornadaPrincipiosPage3 />}
        />
        <Route
          path="/jornada/principios/page4"
          element={<JornadaPrincipiosPage4 />}
        />
        <Route
          path="/jornada/principios/page5"
          element={<JornadaPrincipiosPage5 />}
        />
        <Route
          path="/jornada/principios/page6"
          element={<JornadaPrincipiosPage6 />}
        />
        <Route path="/welcomekit" element={<WelcomeKitWrapper />} />
        <Route path="/welcomekit/page2" element={<WelcomeKitPage2 />} />
        <Route path="/welcomekit/page3" element={<WelcomeKitPage3 />} />
        <Route path="/welcomekit/page4" element={<WelcomeKitPage4 />} />
        <Route path="/welcomekit/page5" element={<WelcomeKitPage5 />} />

        <Route path="/minigame" element={<Minigame />} />
        <Route path="/addcultura" element={<AddCultura />} />
        <Route path="/addprincipio" element={<AddPrincipio />} />
        <Route path="/congrats" element={<Congrats />} />

        <Route path="/welcomekit/page1" element={<WelcomeKitPage1 />} />

        <Route path="/jornada" element={<JornadaWrapperPage />} />
      </Route>
      <Route path="/login" element={<Login/>}/>
        <Route path="/esqueceuSenha" element={<EsqueceuSenha/>}/>
        <Route path="/confirmacaoCodigo" element={<ConfirmacaoCodigo/>}/>
        <Route path="/novaSenha" element={<NovaSenha/>}/>
      <Route path="/alteracaoSenha" element={<AlteracaoSenha/>}/>
      
    </Routes>
  );
}

export default AppRoutes;
