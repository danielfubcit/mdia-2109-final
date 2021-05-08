import React from 'react';
import styled from 'styled-components';

const FinalResultTextBoxCont = styled.div`
    display: flex;
    flex-direction: row;
    width: 340px;
    height: 100px;
    background: #9AC397;
    border-radius: 50px;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 2px 7px 10px grey;
    position: relative;

    animation: opacity 1s;
    animation-fill-mode: both;

    @keyframes opacity {
        0% { opacity: 0; }
        80 { opacity: 0; }
        100% { opacity:1; }
        
    }

`;

const FinalResultTextBoxOpacity = styled.div`
    animation: shake 4s;
    animation-delay: ${prop => prop.delay};
    animation-fill-mode: both;
    animation-iteration-count: infinite ;
    transition-timing-function: ease-in-out;

    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        3% { transform: translate(-1px, -2px) rotate(-1deg); }
        6% { transform: translate(-3px, 0px) rotate(1deg); }
        9% { transform: translate(3px, 2px) rotate(0deg); }
        12% { transform: translate(1px, -1px) rotate(1deg); }
        15% { transform: translate(-1px, 2px) rotate(-1deg); }
        18% { transform: translate(-3px, 1px) rotate(0deg); }
        21% { transform: translate(3px, 1px) rotate(-1deg); }
        24% { transform: translate(-1px, -1px) rotate(1deg); }
        27% { transform: translate(1px, 2px) rotate(0deg); }
        30% { transform: translate(1px, -2px) rotate(-1deg); }
        31% { transform: translate(0px, 0px) rotate(0deg); }
        100% { transform: translate(0px, 0px) rotate(0deg); }
    }
`

const FinalResultTextBoxImg = styled.img`
    width: 20%;
    height: auto;
`;

const FinalResultTextBoxText = styled.div`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: ${prop => prop.fontsize}px;
    text-align: center;
    color: white;
    word-wrap: break-word;
`;

//props
const FinalResultTextBoxUI = ({
    text = "Eat locally",
    src = "/cafe.svg",
    fontsize = 34,
    delay = "2s",
    onClick = () => {}
}) => {
    return <FinalResultTextBoxOpacity delay={delay}>
    <FinalResultTextBoxCont onClick={onClick}>
        <FinalResultTextBoxImg src={src}>
        </FinalResultTextBoxImg>
        <FinalResultTextBoxText fontsize={fontsize}>
        {text}
        </FinalResultTextBoxText>
    </FinalResultTextBoxCont>
    </FinalResultTextBoxOpacity>
}

export default FinalResultTextBoxUI;