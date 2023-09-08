import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import RespectForPrincipios from "../../components/RespectForPrincipio/RespectForPrincipios";
import RespectForCultura from "../../components/RespectForCultura/RespectForCultura";
import RespectForGeral from "../../components/RespectForGeral/RespectForGeral";

export default function UsersMenu() {

  const [activeSection, setActiveSection] = useState("Geral");

  const handleTabClick = (sectionName) => {
    setActiveSection(sectionName);
  };


  return (
    <>
      <Navbar />
      <Sidebar />
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
                <a
                  href="#"
                  className={
                    activeSection === "Geral" ? "Geral active" : "Geral"
                  }
                  onClick={() => handleTabClick("Geral")}
                >
                  Geral
                </a>
              </li>
              <li>
                <a
                  className={activeSection === "Cultura" ? "active" : ""}
                  onClick={() => handleTabClick("Cultura")}
                >
                  Cultura
                </a>
              </li>
              <li>
                <a
                  className={activeSection === "Principios" ? "active" : ""}
                  onClick={() => handleTabClick("Principios")}
                >
                  Princípios
                </a>
              </li>
            </ul>
          </div>
        </div>
        {activeSection === "Geral" && (
            <RespectForGeral />
        )}
        
        {activeSection === "Cultura" && (
          <section className="secondSection">
            <RespectForCultura />
          </section>
        )}
        {activeSection === "Principios" && (
          <section className="thirdSection">
            <RespectForPrincipios />
          </section>
        )}
      </div>
    </>
  );
}
