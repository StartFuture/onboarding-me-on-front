import React, { useState } from 'react';
import './style.css'
import logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom';
import AlteracaoSenha from '../AlteracaoSenha/AlteracaoSenha';
import Login from '../Login/Login';


const NovaSenha = () => {
    return (
        <>
            <div className='nova-senha-container'>
                <header className="nova-senha-header">
                    <img src={logo} alt="Logo" className="logo" />
                </header>
                <div className="nova-senha-content">
                    <form onSubmit={''}>
                        <div className="formulario">
                            <h1>Defina sua nova senha</h1>
                            <p>Insira e confirme sua nova senha nos campos abaixo.</p>
                            <label htmlFor="senha">Nova senha:</label>
                            <input type="text" id="senha" placeholder="Digite aqui" />
                            <label htmlFor="senha">Confirme sua senha:</label>
                            <input type="text" id="senha" placeholder="Digite aqui" />
                        </div>
                        <Link to='/login'>
                            <button className="botao-voltar">Voltar ao login</button>
                        </Link>
                        <Link to='/alteracaoSenha'>
                            <button className="botao-prosseguir">Prosseguir</button>
                        </Link>
                    </form>
                </div >
            </div >

        </>
    )
}

export default NovaSenha;