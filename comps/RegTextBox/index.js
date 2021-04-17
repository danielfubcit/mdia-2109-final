import React from 'react';
import styled from 'styled-components';

const RegTextBoxCont = styled.span`
    font-family: 'Roboto Condensed', sans-serif;
    width: 250px;
    height: 122px;
    word-wrap: break-word;
    color: white;
    text-align: ${props=>props.align};
    font-size: ${props=>props.fontSize}px;
`

//props
const RegTextBoxUI = ({
    align = "center",
    fontSize = 24,
    text = "The average Canadian contributes to about 10kg of CO2 emission each day.",
}) => {
    return <RegTextBoxCont align={align} fontSize={fontSize}>
        {text}
    </RegTextBoxCont>
}

export default RegTextBoxUI;
    