import React from 'react';
import styled from 'styled-components';

const InfoTextBoxCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Roboto Condensed', sans-serif;
    width: 330px;
    height: 220px;
    background: #45AFDD;
    border-radius: 25px;
    color: #FFFFFF;
    font-weight: bold;
`;

const InfoTextBoxText = styled.div`
    font-size: 24px
`;


//props
const InfoTextBoxUI = ({
    align = "center",
    text = "Overloading the earth’s atmosphere with carbon dioxide is causing warming land and ocean temperatures resulting in severe storms, droughts, and other weather events.",
}) => {
    return <InfoTextBoxCont align={align} >
        <InfoTextBoxText>{text}</InfoTextBoxText>
    </InfoTextBoxCont>
}

export default InfoTextBoxUI;
    