import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UsersMenu from "./pages/UsersMenu";
import Gamifield from "./pages/Gamifield";
import MiniGame from "./pages/MiniGame";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/seila" element={<Home />} />
        <Route path="/menu" element={<UsersMenu />} />
        <Route path="/gamified" element={<Gamifield />} />
        <Route path="/minigame" element={<MiniGame />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
