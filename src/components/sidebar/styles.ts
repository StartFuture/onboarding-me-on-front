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
  justify-content: center;
  transition: all 0.3s ease;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (min-width: 1024px) {
    transform: translateX(0);
  }
`;

export const SidebarHeader = styled.div`
  background: red;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
    margin-bottom: 10px;
  }
`;

export const MenuItem = styled.div`
  padding: 30px 15px;
  color: red;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: #f0f0f0;
  }

  @media (max-width: 768px) {
    padding: 25px 10px;
  }
`;

export const HamburgerButton = styled.button`
  background: red;
  color: white;
  border: none;
  font-size: 30px;
  padding: 10px;
  cursor: pointer;
  display: none;

  @media (max-width: 1023px) {
    display: block;
  }
`;

