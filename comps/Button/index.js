import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ButtonCont = styled.span`

`;

const ButtonInput = styled.button`
    display: flex;
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
`;

//props
const ButtonUI = ({
    text="GAS",
    bgcolor="#9AC397",
    routeTo="/distanceSelection",
    fontSize=36,
    width = 320,
    height = 100
}) => {
    const router = useRouter();
    return <ButtonCont onClick={()=>router.push(routeTo)}>
        <ButtonInput height={height} width={width} bgcolor={bgcolor} fontSize={fontSize}>
        {text}
        </ButtonInput>
    </ButtonCont>
}

export default ButtonUI;