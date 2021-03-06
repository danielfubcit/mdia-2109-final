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
  const router = useRouter();
  return <FactCont>
    <Head>
      <title>Fact Page</title>
    </Head>
    <div className="back">
    <ButtonUI routeTo="/distance/gas/twentyFive" bgcolor="#2C5A27" width="130" height="60" text="Back" fontSize="26"></ButtonUI>
    </div>
    <div className="body">
      <div className="marginT marginB">
          <InfoTextBoxHeadUI></InfoTextBoxHeadUI>
      </div>
      <div className="marginB">
          <InfoTextBoxUI text="Overloading the earth’s atmosphere with carbon dioxide is causing warming land and ocean temperatures resulting in severe storms, droughts, and other weather events."></InfoTextBoxUI>
      </div>
      <div>
          <ImageUI iteration="infinite" animation="moveLeftRight" width="100" src="/tsunami.png"></ImageUI>
      </div>
      <div>
          <RoundButtonUI position="absolute" animation="fadeIn" visibility="hidden" onClick={()=>router.push("transport")} text="CONTINUE"></RoundButtonUI>
      </div>
    </div>
  </FactCont>
}