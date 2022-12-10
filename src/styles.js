import styled from "styled-components";


export const Fonts = styled.h1`
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 65px;
    color: #1F1F1F;
    
    h2{
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 33px;
        color: #515151;
    }
`;

export const Position = styled.h1`
    position: absolute;
    width: 453px;
    height: 130px;
    left: 64px;
    top: 64px;
    
    h2{
        position: absolute;
        width: 403px;
        height: 66px;
        margin: 0;
    }

    button1{
        position: absolute;
        width: 192px;
        height: 48px;
        left: 64px;
        top: 400px;
        background: rgba(1, 135, 98, 1);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        cursor: pointer;
        display: flex;
        color: #FFFFFF;
        font-size:18px;
    }

    button2{
        box-sizing: border-box;
        position: absolute;
        width: 192px;
        height: 48px;
        left: 325px;
        top: 400px;
        background: #FFFFFF;
        border: 2px solid #018762;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        cursor: pointer;
        display: flex;
        background: #FFFFFF;
        border: 2px solid #018762;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        color: #018762;
        font-size:18px;
    }

    img{
        position: absolute;
        width: 555px;
        height: 421px;
        left: 747px;
        top: 64px;

    }
`;
export const Footer = styled.a`
flex: none;
order: 2;
flex-grow: 0;

`