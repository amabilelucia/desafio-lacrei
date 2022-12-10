import React from 'react';
import { Position } from '../styles';
import ProfissionalImage from '../imagens/profissional.svg';
import Footer from './Footer';

export default () => {
    return (
        <div>
            <Position>
                <h1>Profissional</h1>
                <h2>Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+</h2>
                <img src= {ProfissionalImage} alt="inicio"/>
            </Position>
            <Footer />
        </div>
    )
};