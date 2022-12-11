import React from "react";
import Lacrei from '../imagens/Lacrei.png';
import { Header } from "../styles";
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <Header>
                <div>
                    <a><img src={Lacrei} /></a>
                </div>
                <ul>
                    <li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
                    <li><Link to="/profissional" style={{ textDecoration: 'none' }}>Profissional</Link></li>
                    <li><Link to="/usuaria" style={{ textDecoration: 'none' }}>Pessoa Usuária</Link></li>
                </ul>
            </Header>
        </div>
    )
};