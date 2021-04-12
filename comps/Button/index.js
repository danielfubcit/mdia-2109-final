import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ButtonCont = styled.span`

`;

const ButtonInput = styled.button`
    display: flex;
    width: 133px;
    height: 72px;
    border-radius: 5px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    color:black;
    background-color: ${props=>props.bgcolor};
    font-size: ${props=>props.fontSize}px;
    border: none;
`;

//props
const ButtonUI = ({
    text="km",
    bgcolor="white",
    routeTo="/",
    number="2",
    fontSize=30
}) => {
    const router = useRouter();
    return <ButtonCont onClick={()=>router.push(routeTo)}>
        <ButtonInput bgcolor={bgcolor} fontSize={fontSize}>
        {number}{text}
        </ButtonInput>
    </ButtonCont>
}

export default ButtonUI;