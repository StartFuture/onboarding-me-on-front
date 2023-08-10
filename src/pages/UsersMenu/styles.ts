import styled, { css } from 'styled-components';

export const AdminMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 250px; // Espaço para a barra lateral

  @media (max-width: 1023px) {
    margin-left: 0; // Retira o espaço da barra lateral quando está fechada
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


export const MainContent = styled.div`
  background-color: whitesmoke;
  flex: 1;
  padding: 20px;
  margin-left: 1rem;

  @media (max-width: 1024px) {
    margin-left: 0.5rem;
  }

  @media (max-width: 768px) {
    margin-left: 0.2rem;
  }
`;

export const Navigation = styled.div`
  background-color: whitesmoke;
  display: flex;
  padding: 10px;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavigationButton = styled.button<{ active: boolean }>`
  background-color: whitesmoke;
  padding: 10px;
  text-align: center;
  flex: 1;

  ${(props) => props.active && css`
    background-color: red;
  `}

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
  }
`;

export const FerramentasEdicao = styled.div`
  background-color: whitesmoke;
  flex: 1;
  padding: 20px;
  margin-left: 1rem;

  @media (max-width: 1024px) {
    margin-left: 0.5rem;
  }

  @media (max-width: 768px) {
    margin-left: 0.2rem;
  }
`;

export const Ferramentas = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1rem;

  @media (max-width: 1024px) {
    margin-left: 0.5rem;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    margin-left: 0.2rem;
    flex-direction: column;
    align-items: center;
  }
`;
