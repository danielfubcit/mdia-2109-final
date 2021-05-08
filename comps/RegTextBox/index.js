import React from 'react';
import styled from 'styled-components';

const RegTextBoxCont = styled.div`
    font-family: 'Roboto Condensed', sans-serif;
    width: 300px;
    height: 122px;
    word-wrap: break-word;
    color: white;
    text-align: ${props=>props.align};
    font-size: ${props=>props.fontSize}px;
    position: relative;

    animation-name: moveRight;
    animation-duration: 2s;  
    animation-delay: 1s;
    animation-fill-mode: both;

    @keyframes moveRight{
        from {left: -400px;}
        to {left: 0px;}
    }
`

//props
const RegTextBoxUI = ({
    align = "center",
    fontSize = 24,
    text = "The average Canadian contributes to about 10kg of CO2 emission each day.",
}) => {
    return <RegTextBoxCont align={align} fontSize={fontSize}>
        {text}
    </RegTextBoxCont>
}

export default RegTextBoxUI;
    