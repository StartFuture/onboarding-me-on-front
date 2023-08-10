import {useState} from 'react';
import Navbar from '../../components/Navbar';
import SubTitle from '../../components/subtitle';
import { AdminMenu, ContentContainer, FerramentasEdicao, MainContent, Navigation, NavigationButton, Ferramentas  } from './styles.ts'
import Sidebar from '../../components/sidebar/Sidebar';

export default function UsersMenu() {
  const [isActive, setIsActive] = useState(false)

  const handleIsActive = () => {
    setIsActive(!isActive)
  } 

  return (
    <AdminMenu>
      <Navbar />
      <Sidebar />
      <ContentContainer>
        <MainContent>
          <SubTitle>Olá, Usuário. Configure a Jornada Gamificada dos seus colaboradores.</SubTitle>
          <Navigation>
            <NavigationButton onClick={handleIsActive} active={isActive}>    GERAL
            </NavigationButton> 
            <NavigationButton onClick={handleIsActive} active={isActive}>
              CULTURA
            </NavigationButton> 
            <NavigationButton onClick={handleIsActive} active={isActive}>
              PRINCÍPIOS
            </NavigationButton>
          </Navigation>
          <SubTitle>Olá, Usuário. Configure a Jornada Gamificada dos seus colaboradores.</SubTitle>
          <Ferramentas>
            <img src="youtube" alt="logo youtube" />
            <p>youtube link</p> 
            <img src="" alt="editar" />
            <img src="" alt="remover" />
            </Ferramentas>
            <div className="Ferramentas">
            <FerramentasEdicao />
            <FerramentasEdicao />
            <FerramentasEdicao />
          </div>
        </MainContent>
      </ContentContainer>
    </AdminMenu>
  );    
};