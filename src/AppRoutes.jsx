import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WelcomeKit from "./pages/WelcomeKit";
import Layout from "./layouts/Layout";

const AppRoutes = () => {
  return (
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/welcomekit" element={<WelcomeKit />}/>
      </Route>
      </Routes>
  );
};

export default AppRoutes;
