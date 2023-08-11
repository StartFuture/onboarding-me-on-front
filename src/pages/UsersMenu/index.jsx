import {useState} from 'react';
import './styles.css'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import SubTitle from '../../components/subtitle';
import Edicao from '../../assets/svg/Edição.svg'
import Youtube from '../../assets/svg/Youtube.svg'
import Lixeira from '../../assets/svg/Lixeira.svg'
import Discord from '../../assets/svg/Discord.svg'
s

export default function UsersMenu() {
  const [isActive, setIsActive] = useState(false)

  const handleIsActive = () => {
    setIsActive(!isActive)
  } 

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='Maincontent'>
        <div className='Title-with-Bar'>
          <div className='Bar' />
          <div className='Title'>
            <h3>Olá, Usuário.<br/>
              Configure a Jornada Gamificada dos seus colaboradores.</h3>
          </div>
        </div>
      </div>
    </>
  );  
};