import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const RoundButtonCont = styled.span`

`;

const RoundButtonInput = styled.button`
    display: flex;
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
`;

//props
const RoundButtonUI = ({
    text="BEGIN",
    bgcolor="#9AC397",
    routeTo="/vehicleSelection",
    fontSize=30
}) => {
    const router = useRouter();
    return <RoundButtonCont onClick={()=>router.push(routeTo)}>
        <RoundButtonInput bgcolor={bgcolor} fontSize={fontSize}>
        {text}
        </RoundButtonInput>
    </RoundButtonCont>
}

export default RoundButtonUI;