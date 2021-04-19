import Head from 'next/head'
import styled from 'styled-components';
import React, {useState}  from 'react';
import ImageUI from '../comps/Image';
import ResultHeadBoxUI from '../comps/ResultHeadBox'
import RegTextBoxUI from '../comps/RegTextBox'
import FinalResultTextBoxUI from '../comps/FinalResultTextBox'
import ButtonUI from '../comps/Button';


const FinalResultCont = styled.div`
  margin:0;
  display: flex;
  flex-direction: column;
  background-color: #79CFE2;
  justify-content: center;
  align-items: center;

  .title {
    margin-top: 50px;
    margin-bottom:120px;
  }

  .marginB {
    margin-bottom: 40px;
  }
`;

export default function FinalResult() {
  return <FinalResultCont>
    <Head>
      <title>Final Result</title>
    </Head>
    <div className="title">
        <ResultHeadBoxUI></ResultHeadBoxUI>
    </div>
    <div className="marginB">
        <RegTextBoxUI></RegTextBoxUI>
    </div>
    <div className="marginB">
        <FinalResultTextBoxUI></FinalResultTextBoxUI>
    </div>
    <div className="marginB">
        <FinalResultTextBoxUI text="Reuse &#38; Recycle" src="/recycle.svg" fontsize="26"></FinalResultTextBoxUI>
    </div>
    <div className="marginB">
        <FinalResultTextBoxUI text="Consider..." src="/public-transport.svg"></FinalResultTextBoxUI>
    </div>
    <div className="marginB">
        <ButtonUI routeTo="/" bgcolor="#2C5A27" width="190" height="60" text="Return Home" fontSize="26"></ButtonUI>
    </div>
  </FinalResultCont>
}
