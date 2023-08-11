import { useState } from "react";
import "./styles.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Edicao from "../../assets/svg/Edição.svg";
import Youtube from "../../assets/svg/Youtube.svg";
import Lixeira from "../../assets/svg/Lixeira.svg";
import Discord from "../../assets/svg/Discord.svg";

export default function UsersMenu() {
  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

    };
  return (
    <>
      <Navbar />
      <button onClick={toggleMenu}>Menu</button>
      <Sidebar isOpen={isOpen} toggle={toggleMenu} />
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
