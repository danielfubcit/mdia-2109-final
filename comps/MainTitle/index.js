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
    animation-name: ${prop=>prop.animation};
    animation-duration: 2s;  
    animation-delay: ${prop=>prop.delay};
    animation-fill-mode: both;

    @keyframes opacity{
        from {opacity: 0;}
        to {opacity: 1;}
    }
`

//props
const MainTitleUI = ({
    text = "CO2 EMISSION RESULTS",
    color = "#3AA4D1",
    fontsize = "32",
    animation = "opacity",
    delay ="",
}) => {
    return <MainTitleCont animation={animation} delay={delay} color={color} fontsize={fontsize}>
        {text}
    </MainTitleCont>
}

export default MainTitleUI;