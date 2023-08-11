import { Routes, Route, useLocation } from "react-router-dom";
import UsersMenu from "./pages/UsersMenu";
import Gamifield from "./pages/Gamifield";
import Minigame from "./pages/Minigame";


const AppRoutes = () => {
const location = useLocation()
  return (
 
      <Routes location={location} key={location.pathname}>
        <Route path="/menu" element={<UsersMenu />} />
        <Route path="/gamifield" element={<Gamifield />} />
        <Route path="/minigame" element={<Minigame />} />
      </Routes>

  );
};

export default AppRoutes;
