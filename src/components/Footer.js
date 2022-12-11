import React from "react";
import ImgInstagram from "../imagens/ILogo.png";
import ImgFacebook from "../imagens/FLogo.png";
import ImgLinkedin from "../imagens/LLogo.png";
import { Footer } from "../styles"
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <Footer>
                <footer>
                    <hr></hr>
                    <ul>
                        <li><a href="https://www.instagram.com/lacrei.saude/"><img src={ImgInstagram} /></a></li>
                        <li><a href="https://www.facebook.com/lacrei.saude"><img src={ImgFacebook} /></a></li>
                        <li><a href="https://www.linkedin.com/company/lacrei/"><img src={ImgLinkedin} /></a></li>
                    </ul>
                    <ul2>
                        <lu><Link to="/" style={{textDecoration:'none'}}>Home</Link></lu>
                        <lu><Link to="/profissional" style={{textDecoration:'none'}}>Profissional</Link></lu>
                        <lu><Link to="/usuaria" style={{textDecoration:'none'}}>Pessoa Usuária</Link></lu>
                    </ul2>
                </footer>
            </Footer>
        </div>
    )
};