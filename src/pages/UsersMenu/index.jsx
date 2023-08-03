import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Siderbar';
import sinoImage from './assets/sino.png'

const UsersMenu = ()=> {
  return (
    <div className='AdminMenu'>
      <Navbar/>
      <div className='content-container'>
        <Sidebar /> {/* Exiba o menu lateral */}
      </div>
      <div className='main-content'>
        <div className='main-content'>
          <h3>Olá, Usuário. Configure a Jornada Gamificada dos seus colaboradores.</h3>
        </div>
        <div className='navigation'>
          <button className='utilizando'>GERAL</button> <button>CULTURA</button> <button>PRINCÍPIOS</button>
        </div>
      </div>
      </div>
  );
};

export default UsersMenu;
 