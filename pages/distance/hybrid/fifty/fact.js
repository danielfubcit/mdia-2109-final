import Head from 'next/head'
import styled from 'styled-components';
import React, {useState}  from 'react';
import InfoTextBoxHeadUI from '../../../../comps/InfoTextBoxHead'
import InfoTextBoxUI from '../../../../comps/InfoTextBox'
import ImageUI from '../../../../comps/Image';
import RoundButtonUI from '../../../../comps/RoundButton';
import ButtonUI from '../../../../comps/Button';
import {useRouter} from 'next/router';

const FactCont = styled.div`
  margin:0;
  display: flex;
  flex-direction: column;
  background-color: #79CFE2;

  .marginT {
    margin-top: 50px;
  }

  .marginB {
    margin-bottom: 40px;
  }

  .body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .back {
    margin: 10px 10px 10px 10px;
    display: flex;
    justify-content: flex-start;
  }

`;

export default function Fact() {

  return <FactCont>
    <Head>
      <title>Fact Page</title>
    </Head>
    <div className="back">
    <ButtonUI routeTo="/distance/hybrid/fifty" bgcolor="#2C5A27" width="130" height="60" text="Back" fontSize="26"></ButtonUI>
    </div>
    <div className="body">
      <div className="marginT marginB">
          <InfoTextBoxHeadUI></InfoTextBoxHeadUI>
      </div>
      <div>
          <InfoTextBoxUI text="The transportation sector on gasoline alone makes up 24% of Canada’s carbon emissions..."></InfoTextBoxUI>
      </div>
      <div className="marginB">
          <ImageUI iteration="infinite" animation="moveLeftRight" width="100" src="/transport.png"></ImageUI>
      </div>
      <div className="marginB">
          <RoundButtonUI position="absolute" animation="fadeIn" visibility="hidden" routeTo="transport" text="CONTINUE"></RoundButtonUI>
      </div>
    </div>
  </FactCont>
}
