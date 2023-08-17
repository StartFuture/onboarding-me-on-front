import React from 'react';
import './Sidebar.css';
import Logo from '../../assets/svg/Logo.svg';

const SideMenu = () => {
  return (
    <div className="menu-lateral">
      <div className="logo-container">
        <img src={Logo} alt="On/me" className="logo" />
      </div>
      <ul className="menu-itens">
        <li><a href="#">Jornada Gamificada</a></li>
      </ul>
    </div>
  );
};

export default SideMenu;

