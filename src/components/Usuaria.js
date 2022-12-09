import React from "react";
import { Position } from "../styles";
import UsuariaImage from "../imagens/usuaria.svg"

export default () => {
    return (
        <div>
            <Position>
                <h1>Pessoa Usuária</h1>
                <h2>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</h2>
                <img src= {UsuariaImage} alt="inicio"/>
            </Position>
        </div>
    )
};