import Head from 'next/head'
import styled from 'styled-components';
import React, {useState}  from 'react';
import MainTitleUI from '../comps/MainTitle';
import ResultTextBoxUI from '../comps/ResultTextBox';
import RegTextBoxUI from '../comps/RegTextBox';
import ImageUI from '../comps/Image';
import RoundButtonUI from '../comps/RoundButton';

const FirstResultCont = styled.div`
  margin:0;
  display: flex;
  flex-direction: column;
  background-color: #79CFE2;
  justify-content: center;
  align-items: center;

  .marginT {
    margin-top: 50px;
  }

  .marginB {
    margin-bottom: 40px;
  }
  
  .button {
    position: absolute;
    bottom: -30vh;
    }

`;

export default function FirstResult() {
  return <FirstResultCont>
    <Head>
      <title>First Result</title>
    </Head>
    <div className="marginT marginB">
        <MainTitleUI></MainTitleUI>
    </div>
    <div className="marginB">
        <ResultTextBoxUI></ResultTextBoxUI>
    </div >
    <div>
        <RegTextBoxUI></RegTextBoxUI>
    </div>
    <div>
        <ImageUI width="100" src="/carongreen.png"></ImageUI>
    </div>
    <div className="button">
        <RoundButtonUI text="CONTINUE"></RoundButtonUI>
    </div>
  </FirstResultCont>
}
