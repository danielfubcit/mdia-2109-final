import React from 'react';
import styled from 'styled-components';

const FinalResultTextBoxCont = styled.div`
    display: flex;
    flex-direction: row;
    width: 340px;
    height: 100px;
    background: #9AC397;
    border-radius: 50px;
    justify-content: space-evenly;
    align-items: center;
`;

const FinalResultTextBoxImg = styled.img`
    width: 20%;
    height: auto;
`;

const FinalResultTextBoxText = styled.div`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: ${prop => prop.fontsize}px;
    text-align: center;
    color: white;
    word-wrap: break-word;
`;

//props
const FinalResultTextBoxUI = ({
    text = "Eat locally",
    src = "/cafe.svg",
    fontsize = 34,
    onClick = () => {}
}) => {
    return <FinalResultTextBoxCont onClick={onClick}>
        <FinalResultTextBoxImg src={src}>
        </FinalResultTextBoxImg>
        <FinalResultTextBoxText fontsize={fontsize}>
        {text}
        </FinalResultTextBoxText>
    </FinalResultTextBoxCont>
}

export default FinalResultTextBoxUI;