import React from 'react';
import styled from 'styled-components';

const RoundButtonCont = styled.span`
    position: ${props=>props.position};
`;

const RoundButtonInput = styled.button`
    display: flex;
    position: ${props=>props.position};
    width: 105px;
    height: 105px;
    border-radius: 50px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    color:white;
    background-color: ${props=>props.bgcolor};
    font-size: ${props=>props.fontSize}px;
    border: none;
    box-shadow: 0px 5px 7px grey;
    margin-bottom:100px;
    
    animation: ${props=>props.animation};
    animation-duration: 1s; 
    animation-delay: ${props=>props.delay};
    animation-fill-mode: forwards;
    visibility: ${props=>props.visibility};

    @keyframes fadeIn {
        99% {
          visibility: hidden;
          top:-150px;
          right:-50px;
        }
        100% {
          visibility: visible;
          top:-150px;
          right:-50px;
        }
    }

`;

//props
const RoundButtonUI = ({
    text="BEGIN",
    bgcolor="#9AC397",
    fontSize=30,
    position = "relative",
    animation = "",
    visibility = "visible",
    delay = "2s",
    onClick = () => {}
}) => {
    return <RoundButtonCont  position={position} onClick={onClick}>
        <RoundButtonInput delay={delay} visibility={visibility} animation={animation} position={position} bgcolor={bgcolor} fontSize={fontSize}>
        {text}
        </RoundButtonInput>
    </RoundButtonCont>
}

export default RoundButtonUI;