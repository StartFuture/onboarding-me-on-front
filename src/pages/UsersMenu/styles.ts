import styled, { css } from 'styled-components';

export const AdminMenu = styled.div`
`; 

export const ContentContainer = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  background-color: whitesmoke;
  flex: 1;
  padding: 20px;
  margin-left: 7rem;
`;

export const Navigation = styled.div`
  background-color: whitesmoke;
  flex: 1;
  padding: 10px;
  text-align: center;
`;

export const NavigationButton = styled.button<{ active: boolean }>`
  background-color: whitesmoke;
  flex: 1;
  padding: 10px;
  text-align: center;

  ${(props) => props.active && css`
    background-color: red;
  `}
`;