import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ButtonCont = styled.span`

`;

const ButtonInput = styled.button`
    display: flex;
    position: relative;
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
    border-radius: 25px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    color:white;
    background-color: ${props=>props.bgcolor};
    font-size: ${props=>props.fontSize}px;
    font-weight: bold;
    border: none;
    box-shadow: 2px 7px 10px grey;
    animation-name: ${prop=>prop.animation};
    animation-duration: 2s;  
    animation-delay: ${prop=>prop.delay};
    animation-fill-mode: both;

    @keyframes moveToRight{
        from {left: -200px;}
        to {left: 0px;}
    }
`;

//props
const ButtonUI = ({
    text="GAS",
    bgcolor="#9AC397",
    routeTo="/distanceSelection",
    fontSize=36,
    width = 320,
    height = 100,
    animation = "",
    delay = "0s",
}) => {
    const router = useRouter();
    return <ButtonCont  onClick={()=>router.push(routeTo)} >
        <ButtonInput animation={animation} delay={delay} height={height} width={width} bgcolor={bgcolor} fontSize={fontSize} >
        {text}
        </ButtonInput>
    </ButtonCont>
}

export default ButtonUI;