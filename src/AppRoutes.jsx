import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersMenu from "./pages/UsersMenu";
import Gamifield from "./pages/Gamifield";
import MiniGame from "./pages/MiniGame";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<UsersMenu />} />
        <Route path="/gamifield" elemente={<Gamifield />} />
        <Route path="/minigame" elemente={<MiniGame />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
