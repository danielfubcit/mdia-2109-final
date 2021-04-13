import React from 'react';
import styled from 'styled-components';

const QuestionTextboxCont = styled.span`
    text-align: center;
    padding:40px;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 28px;
`;

const QuestionTextboxMid = styled.span`
    color: white;
`;

//props
const QuestionTextboxUI = ({
    text1 = "How much CO2 emissions does an",
    spantext = " ELECTRIC CAR",
    text2 = " produce daily?"
}) => {
    return <QuestionTextboxCont>
        {text1}
        <QuestionTextboxMid>
        {spantext}
        </QuestionTextboxMid>
        {text2}
    </QuestionTextboxCont>
}

export default QuestionTextboxUI;