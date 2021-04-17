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
    width: 80%;
    height: auto;
    top: 20px;
`;

const QuestionTextboxText = styled.div`
    font-weight: bold;
    font-size: 34px;
    text-align: center;
    color: white;
    padding-bottom: 30px;
`;

//props
const QuestionTextboxUI = ({
    text = "Select your car type",
    src = "/greenCar.svg"
}) => {
    return <QuestionTextboxCont>
        <QuestionTextboxImg src={src}>
        </QuestionTextboxImg>
        <QuestionTextboxText >
        {text}
        </QuestionTextboxText>
    </QuestionTextboxCont>
}

export default QuestionTextboxUI;