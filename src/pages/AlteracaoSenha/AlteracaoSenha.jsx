import React, { useState } from 'react';
import logo from '../../assets/Logo.svg';
import check from '../../assets/svg/Check.svg'
import './style.css'
import Login from '../Login/Login';
import { Link } from 'react-router-dom';



const AlteracaoSenha = () => {
    return (
        <div className="alteracao-senha-container">
            <header className="alteracao-senha-header">
                <img src={logo} alt="Logo" className="logo" />
            </header>
            <div className="alteracao-senha-content">
                <img src={check} alt="Logo" className="logo" />
                <form onSubmit={''}>
                    <div className="formulario">
                        <h1>Sua senha foi alterada com sucesso</h1>
                    </div>                
                        <Link to='/login'>
                            <button className="botao-login">Ir para o login</button>
                    </Link>
                </form>
            </div>
        </div>

    )
}

export default AlteracaoSenha;