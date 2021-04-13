import React from 'react';
import styled from 'styled-components';

const MainPageTextBoxCont = styled.span`
    width: 360px;
    height: 307px;
    background-color: white;
    text-align: center;
    border-radius: 25px;
    padding: 10px;
    line-height: 28px;
    font-family: 'Roboto Condensed', sans-serif;
`

const MainPageTextBoxP1 = styled.p`
`;

const MainPageTextBoxP2 = styled.p`
`;

//props
const MainPageTextBoxUI = ({
    text1 = "Carbon dioxide emissions are the primary driver of global climate change. It is widely recognized that to avoid the worst impacts of climate change, the world needs to urgently reduce emissions. These emissions are expelled from vehicles, and collectively cars and trucks account for nearly one-fifth of all Canada emissions.",
    text2 = "Let us recognize the ways that cars have contributed to carbon emissions -- and what this means for you.",
}) => {
    return <MainPageTextBoxCont>
        <MainPageTextBoxP1>
            {text1}
        </MainPageTextBoxP1>
        <MainPageTextBoxP2>
            {text2}
        </MainPageTextBoxP2>
    </MainPageTextBoxCont>
}

export default MainPageTextBoxUI;