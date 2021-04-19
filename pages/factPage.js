import Head from 'next/head'
import styled from 'styled-components';
import React, {useState}  from 'react';
import InfoTextBoxHeadUI from '../comps/InfoTextBoxHead'
import InfoTextBoxUI from '../comps/InfoTextBox'
import ImageUI from '../comps/Image';
import RoundButtonUI from '../comps/RoundButton';

const FactPageCont = styled.div`
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
    position: relative;
    top:-140px;
    }

`;

export default function FactPage() {
  return <FactPageCont>
    <Head>
      <title>Fact Page</title>
    </Head>
    <div className="marginT marginB">
        <InfoTextBoxHeadUI></InfoTextBoxHeadUI>
    </div>
    <div className="marginB">
        <InfoTextBoxUI></InfoTextBoxUI>
    </div>
    <div>
        <ImageUI width="100" src="/tsunami.png"></ImageUI>
    </div>
    <div className="button">
        <RoundButtonUI routeTo="transportSelection" text="CONTINUE"></RoundButtonUI>
    </div>
  </FactPageCont>
}
