import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ButtonCont = styled.span`

`;

const ButtonInput = styled.button`
    display: flex;
    width: ${props=>props.width}px;
    height: 98px;
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
    routeTo="/",
    fontSize=36,
    width = 320
}) => {
    const router = useRouter();
    return <ButtonCont onClick={()=>router.push(routeTo)}>
        <ButtonInput width={width} bgcolor={bgcolor} fontSize={fontSize}>
        {text}
        </ButtonInput>
    </ButtonCont>
}

export default ButtonUI;