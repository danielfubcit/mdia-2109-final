import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

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
    top:-150px;
    right:-50px;
    
    animation: 1s fadeIn;
    animation-delay:3s;
    animation-fill-mode: forwards;
    visibility: hidden;

    @keyframes fadeIn {
        99% {
          visibility: hidden;
        }
        100% {
          visibility: visible;
        }
    }
`;

//props
const RoundButtonUI = ({
    text="BEGIN",
    bgcolor="#9AC397",
    routeTo="/vehicleSelection",
    fontSize=30,
    position = "relative",
}) => {
    const router = useRouter();
    return <RoundButtonCont position={position} onClick={()=>router.push(routeTo)}>
        <RoundButtonInput position={position} bgcolor={bgcolor} fontSize={fontSize}>
        {text}
        </RoundButtonInput>
    </RoundButtonCont>
}

export default RoundButtonUI;