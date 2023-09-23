import React from 'react';
import './Profile.css';
import Pontos from '../../assets/JornadaPage4Frame.png';
import Medalha1 from '../../assets/JornadaPage4Medalha1.png';
import Medalha2 from '../../assets/JornadaPage4Medalha2.png';
import { useNavigate } from 'react-router-dom';
import config from '../../services/config';
import api from '../../services/api';

const Profile = () => {

  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();

    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      api
        .post('auth/logout', {}, config)
        .then((res) => {
          localStorage.clear();
          navigate('/login');
        })
        .catch((error) => {
          alert('Falha ao fazer logout');
        });
    } else {
      localStorage.clear();
      navigate('/login');
    }
  };

  return (
    <div className='profile-container'>
      <div className='profile-left'>
        <div className='username'>Eduardo Perreira</div>
        <div className='left-card centered'>
          <img src={Pontos} alt='Ícone de Pontos' style={{ width: '50%', marginBottom: '20px' }} />
        </div>
        <div className='left-card'>
          <div>Mestre das Ferramentas</div>
          <img src={Medalha1} alt='Ícone de Ferramentas' />
        </div>
        <div className='left-card'>
          <div>Ouro em Cultura & Princípios</div>
          <img src={Medalha2} alt='Ícone de Cultura' />
        </div>
      </div>
      <div className='profile-right'>
        <div className='card'>
          <h2>Informações Pessoais</h2>
          <p><strong>CPF:</strong> 123.456.789-00</p>
          <p><strong>Data de Nascimento:</strong> 01/01/1990</p>
          <p><strong>Telefone:</strong> (11) 98765-4321</p>
          <p><strong>Endereço:</strong> Rua Exemplo, 123</p>
          <button className='button' onClick={(e) => logout(e)}>
            Logout
          </button>
          <button className='button'>
            Alterar Senha
          </button>
        </div>
        <div className='card'>
          <h2>Informações Profissionais</h2>
          <p><strong>Cargo:</strong> Desenvolvedor</p>
          <p><strong>Email Corporativo:</strong> exemplo@empresa.com</p>
          <p><strong>ID Empresa:</strong> EMP12345</p>
          <p><strong>Tempo de Contrato:</strong> 2 anos</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
