import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersMenu from "./pages/UsersMenu";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<UsersMenu />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
