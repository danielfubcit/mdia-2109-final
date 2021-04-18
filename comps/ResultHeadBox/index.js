import React from 'react';
import styled from 'styled-components';

const ResultHeadboxCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto Condensed', sans-serif;
    width: 340px;
    height: 100px;
    background: ${props=>props.bgcolor};
    border-radius: 25px;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 36px;
`;

const ResultHeadboxText = styled.div`
    margin-top:100px;
    text-align: center;
`;

const ResultHeadboxImg = styled.img`
    width: 30%;
    height: auto;
`;

//props
const ResultHeadboxUI = ({
    text = "Fantastic!",
    src = "/earthdrawing.svg",
    bgcolor = "#45AFDD"
}) => {
    return <ResultHeadboxCont bgcolor={bgcolor}>
        <ResultHeadboxText>{text}</ResultHeadboxText>
        <ResultHeadboxImg src={src}></ResultHeadboxImg>
    </ResultHeadboxCont>
}

export default ResultHeadboxUI;