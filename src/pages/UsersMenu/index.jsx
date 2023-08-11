import {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import SubTitle from '../../components/subtitle';
import Edicao from '../../assets/svg/Edição.svg'
import Youtube from '../../assets/svg/Youtube.svg'
import Lixeira from '../../assets/svg/Lixeira.svg'
import Discord from '../../assets/svg/Discord.svg'
import { AdminMenu,Stick, ContentContainer, MainContent, Navigation, NavigationButton, Ferramentas, RedButton, Alinhar, EdicaoFerramentas } from './styles.ts'
import Home from '../Minigame';



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
          <Stick/>
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
          <SubTitle>Informe o vídeo de apresentação da empresa. O colaborador irá assistir assim que iniciar o processo..</SubTitle>
          <Ferramentas>
            <img src={Youtube} alt="logo youtube"  />
            <SubTitle>youtube link</SubTitle> 
            <img src={Edicao} alt="editar" className='' />
            <img src={Lixeira} alt="remover" />
          </Ferramentas>
          <Alinhar>
            <SubTitle>Ferramentas do dia a dia.</SubTitle>
            <RedButton>Adicionar Ferramnetas</RedButton>
          </Alinhar>
          <EdicaoFerramentas>
            <FerramentasEdicao>
              <img src={Discord} alt="Discord" />
              <SubTitle>Discord</SubTitle>
              <img src={Edicao} alt="" />
              <img src={Lixeira} alt="" />
            </FerramentasEdicao>
            <FerramentasEdicao>
              <img src={Discord} alt="Discord" />
              <SubTitle>Discord</SubTitle>
              <img src={Edicao} alt="" />
              <img src={Lixeira} alt="" />
            </FerramentasEdicao> 
            <FerramentasEdicao>
              <img src={Discord} alt="Discord" />
              <SubTitle>Discord</SubTitle>              <img src={Edicao} alt="" />
              <img src={Lixeira} alt="" />
            </FerramentasEdicao>  
          </EdicaoFerramentas>
        </MainContent>
      </ContentContainer>
    </AdminMenu>
  );    
};