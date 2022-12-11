import React from 'react';
import {Position } from '../styles';
import HomeImage from '../imagens/home.svg';
import Footer from './Footer';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

export default () => {
    let navegate = useNavigate();
    function clickUsuaria(){
        navegate('/usuaria');
    };
    function clickprofissional(){
        navegate('/profissional');
    };

    return (
        <div>
            <Header />
            <Position>
                <h1>Boas Vindas a Lacrei Saúde</h1>
                <h2>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</h2>

                <button1 onClick= {clickUsuaria}>Pessoa Usuária</button1>
                <button2 onClick={clickprofissional}>Profissional</button2>

                <img src= {HomeImage} alt="inicio"/>
            </Position>
            <Footer />
        </div>
    )
};