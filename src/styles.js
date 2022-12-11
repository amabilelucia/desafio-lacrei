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
        left: 0px;
        top: 336px;
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
        left: 261px;
        top: 336px;
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
export const Footer = styled.footer`
    hr{
        position: absolute;
        width: 1238px;
        height: 1px;
        left: 63.94px;
        top: 561px;
        border: 0px;
        color: #B0E0D3;
        background: #B0E0D3;
    }
    ul{
        width: 100%;
        position: absolute;
        left: 64px;
        padding-inline-start: 0px;
        top: 644px;
        li{
             height: 60px;
             display: inline-block;
             padding-right: 32px;
         }
    }
    ul2{
        width: 100%;
        position: absolute;
        left: 64px;
        padding-inline-start: 0px;
        top: 594px;
        lu{
             height: 60px;
             display: inline-block;
             padding-right: 32px;
             font-family: 'Nunito';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            color: #1F1F1F;
         }
    } 
`;

export const Header = styled.header`
    width:  1366px;
    position: absolute;
    text-align: right;
    padding-inline-start: 0px;
    top: 0px;
    background: #EEEEEE;
    height: 60px;
    margin: 0px;

    div{
        a{
            position: absolute;
            width: 89px;
            height: 44.75px;
            left: 64px;
            top: 8px;
        }
    }

    ul{
        margin:0px;
        padding:0px;
        li{
        height: 60px;
        display: inline-block;
        padding-left: 20px;
        height: 60px;
        display: inline-block;
        padding-right: 32px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #1F1F1F;  
        }
    }
    
`;