import React from 'react';
import styled from 'styled-components';

const InfoTextBoxHeadCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto Condensed', sans-serif;
    width: 300px;
    height: 170px;
    word-wrap: break-word;
    color: white;
    text-align: ${props=>props.align};
`;

const InfoTextBoxHeadHead = styled.div`
    font-size: 24px
`;

const InfoTextBoxHeadText = styled.div`
    font-size: 48px
`;

//props
const InfoTextBoxHeadUI = ({
    align = "center",
    text1 = "Preparing next question...",
    text2 = "Did you know?"
}) => {
    return <InfoTextBoxHeadCont align={align} >
        <InfoTextBoxHeadHead>{text1}</InfoTextBoxHeadHead>
        <InfoTextBoxHeadText>{text2}</InfoTextBoxHeadText>
    </InfoTextBoxHeadCont>
}

export default InfoTextBoxHeadUI;
    