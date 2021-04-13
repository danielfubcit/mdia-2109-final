import React from 'react';
import styled from 'styled-components';

const RegTextBoxCont = styled.span`
    font-family: 'Roboto Condensed', sans-serif;
    text-align: ${props=>props.align};
    padding: 0px ${props=>props.padding}px;
    font-size: ${props=>props.fontSize}px;
`

const RegTextBoxP1 = styled.span`
    color: black;
`;

const RegTextBoxP2 = styled.span`
    color: white;  
`;

//props
const RegTextBoxUI = ({
    padding = 30,
    align = "center",
    fontSize = 24,
    text1 = "A",
    text2 = " B",
    text3 = "",
    text4 = "",
    text5 = "",
    text6 = ""
}) => {
    return <RegTextBoxCont padding={padding} align={align} fontSize={fontSize}>
        <RegTextBoxP1>
            {text1}
        </RegTextBoxP1>
        <RegTextBoxP2>
            {text2}
        </RegTextBoxP2>
        <RegTextBoxP1>
            {text3}
        </RegTextBoxP1>
        <RegTextBoxP2>
            {text4}
        </RegTextBoxP2>
        <RegTextBoxP1>
            {text5}
        </RegTextBoxP1>
        <RegTextBoxP2>
            {text6}
        </RegTextBoxP2>
    </RegTextBoxCont>
}

export default RegTextBoxUI;