import React from 'react';
import styled from 'styled-components';

const InfoTextBoxCont = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Roboto Condensed', sans-serif;
    padding: 20px;
    background: #45AFDD;
    border-radius: 25px;
    color: #FFFFFF;
    font-weight: bold;

    animation: size;
    animation-duration: 1s; 
    animation-delay:0.25s;
    animation-fill-mode: both;

    @keyframes size {
        0% {
            width: 0px;
            height: 0px;
            font-size: 0px;
        }
        100% {
            width: 330px;
            height: 250px;
            font-size: 24px;
        }
    }
`;

const InfoTextBoxText = styled.div`
    
`;


//props
const InfoTextBoxUI = ({
    align = "center",
    text = "Overloading the earth’s atmosphere with carbon dioxide is causing warming land and ocean temperatures resulting in severe storms, droughts, and other weather events.",
}) => {
    return <InfoTextBoxCont align={align} >
        <InfoTextBoxText>{text}</InfoTextBoxText>
    </InfoTextBoxCont>
}

export default InfoTextBoxUI;
    