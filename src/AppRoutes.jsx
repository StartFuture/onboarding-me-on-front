import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersMenu from "./pages/UsersMenu";
import Gamifield from "./pages/Gamifield";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<UsersMenu />} />
        <Route path="/gamifield" element={<Gamifield />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
