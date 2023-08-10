import styled from 'styled-components';

interface SidebarProps {
    open: boolean;
  }
  
  export const SidebarContainer = styled.div<SidebarProps>`
    width: 250px;
    height: 100%;
    background: white;
    border-right: 1px solid #ccc;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centraliza verticalmente */
    transition: all 0.3s ease;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  
    @media (min-width: 768px) {
      transform: translateX(0);
    }
  `;

export const HamburgerButton = styled.button`
  background: white;
  color: black;
  border: none;
  padding: 15px;
  font-size: 24px;
  cursor: pointer;
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const SidebarHeader = styled.div`
  background: red;
  color: white;
  padding: 20px;
  font-weight: bold;
  text-align: center; /* Centraliza o texto */
`;

export const MenuItem = styled.div`
  padding: 20px 15px; /* Aumenta o espaçamento */
  color: red;
  cursor: pointer;
  text-align: center; /* Centraliza o texto */
  &:hover {
    background: #f0f0f0;
  }
`;
