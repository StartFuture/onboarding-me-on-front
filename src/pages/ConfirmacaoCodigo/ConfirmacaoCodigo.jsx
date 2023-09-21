import React, { useState } from 'react';
import './style.css';
import logo from '../../assets/Logo.svg'
import Login from '../Login/Login';
import NovaSenha from '../NovaSenha/NovaSenha';
import { Link } from 'react-router-dom';



const ConfirmacaoCodigo = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="codigo-container">
            <header className="codigo-header">
                <img src={logo} alt="Logo" className="logo" />
            </header>
            <div className="codigo-content">
                <form onSubmit={handleSubmit}>
                    <div className="formulario">
                        <h1>Confirme que é você</h1>
                        <p>Insira o código enviado para o seu e-mail.</p>
                        <label htmlFor="codigo">Código:</label>
                        <input type="text" id="codigo" placeholder="Digite aqui" />
                    </div>
                    <Link to='/login'>
                        <button className="botao-voltar">Voltar ao login</button>
                    </Link>
                    <Link to='/novaSenha'>
                    <button className="botao-prosseguir">Prosseguir</button>
                    </Link>
                </form>
            </div>
        </div>
    )

}
export default ConfirmacaoCodigo;