import { Routes, Route, useLocation } from "react-router-dom";
import UsersMenu from "./pages/UsersMenu";
import Gamifield from "./pages/Gamifield";
import Minigame from "./pages/Minigame";
import AddCultura from "./pages/AdicionarCultura";
import AddPrincipio from "./pages/AdicionarPrincipio";
import Congrats from "./pages/Congrats";
import MinigameChose from "./pages/MinigameChose";
import PreChose from "./pages/PreChose";
import Respeito from "./pages/Respeito";
import SocialMedia from "./pages/SocialMedia";
import Layout from "./layouts/Layout";
import NovaPaginaTabs from "./pages/NovaPaginaTabs";
import VideoPrincipios from "./pages/VideoPrincipios";

const AppRoutes = () => {
const location = useLocation()
  return (
 
      <Routes location={location} key={location.pathname}>
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
        <Route path="/layout" element={<Layout />} />
        <Route path="/novapaginatabs" element={<NovaPaginaTabs />} />
        <Route path="/video-principio" element={<VideoPrincipios />} />
      </Routes>

  );
};

export default AppRoutes;

