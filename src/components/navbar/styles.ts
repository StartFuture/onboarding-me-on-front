import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  justify-content: left;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavItem = styled.li`
  margin: 0 15px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const NavDivider = styled.div`
  width: 1px;
  height: 24px;
  background-color: white;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
`;
