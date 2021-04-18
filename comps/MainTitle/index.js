import React from 'react';
import styled from 'styled-components';

const MainTitleCont = styled.div`
    font-family: 'Roboto Condensed', sans-serif;
    width: 250px;
    height: 90px;
    font-weight: bold;
    font-size: ${prop=>prop.fontsize}px;
    text-align: center;
    color: ${prop=>prop.color};
`

//props
const MainTitleUI = ({
    text = "CO2 EMISSION RESULTS",
    color = "#3AA4D1",
    fontsize = "32"
}) => {
    return <MainTitleCont color={color} fontsize={fontsize}>
        {text}
    </MainTitleCont>
}

export default MainTitleUI;