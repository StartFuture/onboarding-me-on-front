import {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Siderbar';
import sinoImage from './assets/sino.png'
import SubTitle from '../../components/subtitle';
import { AdminMenu, ContentContainer, MainContent, Navigation, NavigationButton } from './styles.ts'

export default function UsersMenu() {
  const [isActive, setIsActive] = useState(false)

  const handleIsActive = () => {
    setIsActive(!isActive)
  } 

  return (
    <AdminMenu>
      <Navbar/>
      <ContentContainer>
        <Sidebar /> {/* Exiba o menu lateral */}
      </ContentContainer>
      <MainContent>
        <MainContent>
          <SubTitle>Olá, Usuário. Configure a Jornada Gamificada dos seus colaboradores.</SubTitle>
        </MainContent>
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
      </MainContent>
    </AdminMenu>
  );
};