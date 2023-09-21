import React, { useState } from 'react';
import './style.css';
import logo from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import ConfirmacaoCodigo from '../ConfirmacaoCodigo/ConfirmacaoCodigo';


const EsqueceuSenha = () => {
    const [username, setUsername] = useState('');
  

    const CORRECT_USERNAME = 'usuario123';

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
          // Lógica de autenticação bem-sucedida, como redirecionamento, armazenamento de token, etc.
          alert('Bem-vindo!');
        } else {
          alert('Esse usuário não existe.');
        }
      };
  return (
    <div className="esqueceu-senha-container">
      <header className="esqueceu-senha-header">
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <div className="esqueceu-senha-content">
        <form onSubmit={handleSubmit}>
        <div className="formulario">
          <h1>Esqueceu a senha?</h1>
          <p>Insira o seu e-mail no campo abaixo e nos ajude a te encontrar.</p>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Digite seu email" value={username}
              onChange={(e) => setUsername(e.target.value)}/>
        </div>
          <Link to='/login'>
          <button className="botao-voltar">Voltar ao login</button>
          </Link>
          <Link to='/confirmacaoCodigo'>
          <button className="botao-prosseguir">Prosseguir</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default EsqueceuSenha;
