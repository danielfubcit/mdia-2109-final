import React from 'react';
import styled from 'styled-components';

const QuestionTextbox2ndCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Roboto Condensed', sans-serif;
    width: 360px;
    height: 290px;
    background: #45AFDD;
    border-radius: 25px;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 24px;
`;

const QuestionTextbox2ndImgCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    top:-40px;
`;

const QuestionTextbox2ndImg = styled.img`
    width: 40%;
    height: auto;
    opacity: 0.5;
`;

const QuestionTextbox2ndText = styled.div`
    padding: 0px 20px;
    text-align: center;
`;

//props
const QuestionTextbox2ndUI = ({
    text = "Have you taken any other modes of transportation today (public transit, biking, etc)?",
    src1 = "/bus.svg",
    src2 = "/cycling.svg"
}) => {
    return <QuestionTextbox2ndCont>
        <QuestionTextbox2ndImgCont>
            <QuestionTextbox2ndImg src={src1}></QuestionTextbox2ndImg>
            <QuestionTextbox2ndImg src={src2}></QuestionTextbox2ndImg>
        </QuestionTextbox2ndImgCont>
        <QuestionTextbox2ndText>{text}</QuestionTextbox2ndText>
    </QuestionTextbox2ndCont>
}

export default QuestionTextbox2ndUI;