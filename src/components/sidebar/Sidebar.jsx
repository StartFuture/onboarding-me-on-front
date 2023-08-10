import React, { useState } from 'react';
import Logo from '../../assets/svg/Logo.svg'
import { SidebarContainer, SidebarHeader, MenuItem, HamburgerButton } from './styles.ts';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <HamburgerButton onClick={handleToggle}>&#9776;</HamburgerButton>
      <SidebarContainer open={open}>
        <SidebarHeader>
          <img src={Logo} alt="On/me" />
        </SidebarHeader>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
        {/* Outros itens de menu */}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
