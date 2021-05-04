import Head from 'next/head'
import styled from 'styled-components';
import React, {useState}  from 'react';
import InfoTextBoxHeadUI from '../../../../comps/InfoTextBoxHead'
import InfoTextBoxUI from '../../../../comps/InfoTextBox'
import ImageUI from '../../../../comps/Image';
import RoundButtonUI from '../../../../comps/RoundButton';
import {useRouter} from 'next/router';

const FactCont = styled.div`
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

`;

export default function Fact() {

  return <FactCont>
    <Head>
      <title>Fact Page</title>
    </Head>
    <div className="marginT marginB">
        <InfoTextBoxHeadUI></InfoTextBoxHeadUI>
    </div>
    <div>
        <InfoTextBoxUI text="Worldwide, SUVs are the 2nd larget contributor to CO2 increase this decade, surpassed only by power generation."></InfoTextBoxUI>
    </div>
    <div className="marginB">
        <ImageUI width="100" src="/SUV.png"></ImageUI>
    </div>
    <div className="marginB">
        <RoundButtonUI routeTo="transport" text="CONTINUE"></RoundButtonUI>
    </div>
  </FactCont>
}
