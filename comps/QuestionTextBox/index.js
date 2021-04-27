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
    animation-name: ${prop=>prop.animation};
    animation-duration: 2s;  
    animation-fill-mode: both;

    @keyframes moveToRight{
        from {left: -500px;}
        to {left: 0px;}
    }

    @keyframes sizeChange {
        0%   {width:10%}
        100% {width:50%}
    }
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
    width = "80",
    animation = "moveToRight"
}) => {
    return <QuestionTextboxCont>
        <QuestionTextboxImg width={width} src={src} animation={animation}>
        </QuestionTextboxImg>
        <QuestionTextboxText >
        {text}
        </QuestionTextboxText>
    </QuestionTextboxCont>
}

export default QuestionTextboxUI;