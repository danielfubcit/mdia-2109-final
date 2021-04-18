import React from 'react';
import styled from 'styled-components';

const QuestionTextboxCont = styled.div`
    display: flex;
    width: 340px;
    height: 238px;
    background: #45AFDD;
    border-radius: 10px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

const QuestionTextboxImg = styled.img`
    padding-bottom: 30px;
    position: relative;
    width: ${prop=>prop.width}%;
    height: auto;
    top: 20px;
`;

const QuestionTextboxText = styled.div`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 34px;
    text-align: center;
    color: white;
    padding-bottom: 30px;
`;

//props
const QuestionTextboxUI = ({
    text = "Select your car type",
    src = "/greenCar.svg",
    width = "80"
}) => {
    return <QuestionTextboxCont>
        <QuestionTextboxImg width={width} src={src}>
        </QuestionTextboxImg>
        <QuestionTextboxText >
        {text}
        </QuestionTextboxText>
    </QuestionTextboxCont>
}

export default QuestionTextboxUI;