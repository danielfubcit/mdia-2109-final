import React from 'react';
import styled from 'styled-components';

const FinalResultTextBoxExtendCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 230px;
    background: #9AC397;
    border-radius: 30px;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 2px 10px 10px grey;
`;

const FinalResultTextBoxExtendImg = styled.img`
    width: 20%;
    height: auto;
`;

const FinalResultTextBoxExtendText = styled.div`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 22px;
    text-align: center;
    color: white;
    word-wrap: break-word;
    padding: 0px 10px;
`;

//props
const FinalResultTextBoxExtendUI = ({
    text = "13% of greenhouse gas emissions result from food transport.",
    src = "/cafe.svg"
}) => {
    return <FinalResultTextBoxExtendCont>
        <FinalResultTextBoxExtendImg src={src}>
        </FinalResultTextBoxExtendImg>
        <FinalResultTextBoxExtendText>
        {text}
        </FinalResultTextBoxExtendText>
    </FinalResultTextBoxExtendCont>
}

export default FinalResultTextBoxExtendUI;