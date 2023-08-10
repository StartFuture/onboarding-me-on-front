import React from 'react';
import {
  NavbarContainer,
  NavList,
  NavItem,
  NavDivider,
  NavLink
} from './StyledNavbar'; // Importe os componentes estilizados a partir do caminho correto

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem><img src="sinoImage" alt="alertas" /></NavItem>
        <NavDivider /> {/* Barra de divisão */}
        <NavItem><NavLink href="#">Usuário Logado</NavLink></NavItem>
        <NavItem><span>I</span></NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
