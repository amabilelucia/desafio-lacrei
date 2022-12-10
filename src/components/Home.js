import React from 'react';
import { Position } from '../styles';
import HomeImage from '../imagens/home.svg';
import Footer from './Footer';

export default () => {
    return (
        <div>
            <Position>
                <h1>Boas Vindas a Lacrei Saúde</h1>
                <h2>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</h2>

                <button1 onClick={null}>Pessoa Usuária</button1>
                <button2 onClick={null}>Profissional</button2>

                <img src= {HomeImage} alt="inicio"/>
            </Position>
            <Footer />
        </div>
    )
};