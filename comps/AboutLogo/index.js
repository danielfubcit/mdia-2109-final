import React from 'react';
import styled from 'styled-components';

const AboutLogoCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:50px;
`;

const AboutLogoText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top:-20px;
    background: #45AFDD;
    border-radius: 25px;
    color: #FFFFFF;
    text-align: center;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;

    animation-name: sizeChange1;
    animation-duration: 1s;  
    animation-fill-mode: both;
    animation-delay: 0.5s;

    @keyframes sizeChange1 {
        0%  {width: 0px;
            height: 0px;
            font-size: 0px;
        }
        50% {
            width: 256px;
            height: 110px;
            font-size: 0px;
        }
        100% {
            width: 256px;
            height: 110px;
            font-size: ${props=>props.fontsize}px;
        }
    }
`;

const AboutLogoImg = styled.img`
    width: 40%;
    height: auto;

    animation-name: sizeChange2;
    animation-duration: 1s;  
    animation-fill-mode: both;

    @keyframes sizeChange2 {
        0%  {width: 0%;
        }
        100% {
            width: 40%;
        }
    }
`;

//props
const AboutLogoUI = ({
    text = "Welcome to our App",
    src = "/Earth.png",
    fontsize = 36,
}) => {
    return <AboutLogoCont>
        <AboutLogoImg src={src}></AboutLogoImg>
        <AboutLogoText fontsize={fontsize}>{text}</AboutLogoText>
    </AboutLogoCont>
}

export default AboutLogoUI;