import { Routes, Route, useLocation } from "react-router-dom";
import UsersMenu from "./pages/UsersMenu";
import Gamifield from "./pages/Gamifield";
import Minigame from "./pages/Minigame";
import AddCultura from "./pages/AdicionarCultura";
import AddPrincipio from "./pages/Adicionar Principio";
import Congrats from "./pages/Congrats";
import MinigameChose from "./pages/MinigameChose";
import PreChose from "./pages/PreChose";
import Respeito from "./pages/Respeito";
import SocialMedia from "./pages/SocialMedia";
import NovaPaginaTabs from "./pages/NovaPaginaTabs";
import VideoPrincipios from "./pages/VideoPrincipios";
import Layout from "./layouts/Layout";
import WelcomeKiat from "./components/WelcomeKitPage1";
import WelcomeKitWrapper from "./pages/WelcomeKitWrapper";


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
         <Route path="/welcomekitwrapper" element={<WelcomeKitWrapper />} />
       </Route>
      </Routes>

  );
};

export default AppRoutes;

