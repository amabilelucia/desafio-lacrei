import React from "react";
import ImgInstagram from "../imagens/ILogo.png";
import ImgFacebook from "../imagens/FLogo.png";
import ImgLinkedin from "../imagens/LLogo.png";

export default () => {
    return (
        <div>
            <section>
                <a href="https://www.instagram.com/lacrei.saude/"><img src={ImgInstagram} /></a>
                <a href="https://www.facebook.com/lacrei.saude"><img src={ImgFacebook} /></a>
                <a href="https://www.linkedin.com/company/lacrei/"><img src={ImgLinkedin} /></a>
            </section>
        </div>
    )
};