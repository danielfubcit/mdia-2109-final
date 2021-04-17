import React from 'react';
import styled from 'styled-components';

const ResultTextboxCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'Roboto Condensed', sans-serif;
    width: 280px;
    height: 170px;
    background: ${props=>props.bgcolor};
    border-radius: 25px;
    color: #FFFFFF;
    font-weight: bold;
`;

const ResultTextboxHead = styled.div`
    font-size: 64px;
`;

const ResultTextboxText = styled.div`
    font-size: 24px;
`;

//props
const ResultTextboxUI = ({
    text1 = "4kg",
    text2 = "CO2 EMITTED",
    bgcolor = "#45AFDD"
}) => {
    return <ResultTextboxCont bgcolor={bgcolor}>
        <ResultTextboxHead>{text1}</ResultTextboxHead>
        <ResultTextboxText>{text2}</ResultTextboxText>
    </ResultTextboxCont>
}

export default ResultTextboxUI;