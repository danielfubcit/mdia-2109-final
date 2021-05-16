import React from 'react';
import styled from 'styled-components';

const RegTextBoxCont = styled.div`
    font-family: 'Roboto Condensed', sans-serif;
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
    word-wrap: break-word;
    color: ${props=>props.color};
    text-align: ${props=>props.align};
    font-size: ${props=>props.fontSize}px;
    position: ${props=>props.position};
    z-index: ${props=>props.zIndex};
    left: ${props=>props.left}px;
    top: ${props=>props.top}px;

    animation-name: ${props=>props.animation};
    animation-duration: 2s;  
    animation-delay: ${props=>props.delay};
    animation-fill-mode: both;

    @keyframes moveRight{
        from {left: -400px;}
        to {left: 0px;}
    }

    @keyframes opacity{
        from {opacity: 0;}
        to {opacity: 1;}
    }
`

//props
const RegTextBoxUI = ({
    width = 300,
    height = 122,
    color = "white",
    align = "center",
    fontSize = 24,
    position = "relative",
    zIndex = "",
    animation = "moveRight",
    left = "",
    top = "",
    delay = "1s",
    text = "The average Canadian contributes to about 10kg of CO2 emission each day.",
}) => {
    return <RegTextBoxCont delay={delay} left={left} top={top} animation={animation} zIndex={zIndex} position={position} width={width} height={height} color={color} align={align} fontSize={fontSize}>
        {text}
    </RegTextBoxCont>
}

export default RegTextBoxUI;
    