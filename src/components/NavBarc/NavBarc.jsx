import React from "react";
import "./NavBarc.css";
import Sino from "/../../assets/svg/Sino.svg"

export default function NavBarc() {
  return (
    <header className={LayoutHeader}>
      <div className="BellIconDiv">
        {/* a tag img precisa do atributo src para inserir a img */}
        <img src={Sino} />
      </div>

      <p>Usuário Logado</p>

      <img src="userIcon" className="userIcon" />
    </header>
  );
}
