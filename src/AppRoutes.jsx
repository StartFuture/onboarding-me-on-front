import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersMenu from "./pages/UsersMenu";
import MenuHeader from "./components/MenuHeader/MenuHeader";



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<UsersMenu />} />
        <Route path="/lateral" elemente={<MenuHeader />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
