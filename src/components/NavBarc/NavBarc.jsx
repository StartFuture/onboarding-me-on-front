import React from "react";
import "./NavBarc.css";
import userIcon from "../../assets/userIcon.png";
import BellIcon from "../../assets/notification-bell-svgrepo-com.svg";

export default function NavBarc() {
  return (
    <header className={LayoutHeader}>
      <div className="BellIconDiv">
        {/* a tag img precisa do atributo src para inserir a img */}
        <img src="BellIcon" />
      </div>

      <p>Usuário Logado</p>

      <img src="userIcon" className="userIcon" />
    </header>
  );
}
