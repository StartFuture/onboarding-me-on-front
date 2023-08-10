import { Routes, Route, useLocation } from "react-router-dom";
import UsersMenu from "./pages/UsersMenu";
import Gamifield from "./pages/Gamifield";
import MiniGame from "./pages/MiniGame";
import Home from "./pages/Home";

const AppRoutes = () => {
const location = useLocation()
  return (
 
      <Routes location={location} key={location.pathname}>
        <Route path="/menu" element={<UsersMenu />} />
        <Route path="/home" element={<Home />} />
        <Route path="/minigame" element={<MiniGame />} />
      </Routes>

  );
};

export default AppRoutes;
