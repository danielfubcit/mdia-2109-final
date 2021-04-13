import React from 'react';
import styled from 'styled-components';

const MainTitleCont = styled.span`
    font-family: 'Roboto Condensed', sans-serif;
`

const MainTitleP1 = styled.span`
    font-size: 96px;
`;

const MainTitleP2 = styled.span`
    font-size: 36px;
`;

const MainTitleP3 = styled.span`
    font-size: 34px;
    color:white;
`;

const MainTitleP4 = styled.span`
    font-size: 96px;
    font-weight: bold;
`;

//props
const MainTitleUI = ({
    text1 = "CO",
    text2 = "2",
    text3 = " and",
    text4 = "YOU"
}) => {
    return <MainTitleCont>
        <MainTitleP1>
            {text1}
        </MainTitleP1>
        <MainTitleP2>
            {text2}
        </MainTitleP2>
        <MainTitleP3>
            {text3}
        </MainTitleP3>
        <MainTitleP4>
            {text4}
        </MainTitleP4>
    </MainTitleCont>
}

export default MainTitleUI;