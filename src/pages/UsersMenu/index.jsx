import { useState } from "react";
import "./styles.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Edicao from "../../assets/svg/Edição.svg";
import Youtube from "../../assets/svg/Youtube.svg";
import Lixeira from "../../assets/svg/Lixeira.svg";
import Discord from "../../assets/svg/Discord.svg";

export default function UsersMenu() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };


  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <div className="Maincontent">
        <div className="Title-with-Bar">
          <div className="Bar" />
          <div className="Title">
            <h3>
              Olá, Usuário.
              <br />
              Configure a Jornada Gamificada dos seus colaboradores.
            </h3>
          </div>
        </div>
        <div className="Navegation">
          <div className="Navegation-Button">
            <ul>
              <li>
                <a href="#" className="Geral">
                  Geral
                </a>
              </li>
              <li>
                <a href="#">Cultura</a>
              </li>
              <li>
                <a href="#">Princípios</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
