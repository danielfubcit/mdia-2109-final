import Head from 'next/head'
import styled from 'styled-components';
import React, {useState}  from 'react';
import AboutLogoUI from '../comps/AboutLogo';
import RoundButtonUI from '../comps/RoundButton';
import RegTextBoxUI from '../comps/RegTextBox';

const AboutCont = styled.div`
  margin:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #79CFE2;

  .marginB {
    margin-bottom:50px;
  }
`;

export default function ABout() {
  return <AboutCont>
    <Head>
      <title>About Page</title>
    </Head>
    <div className="marginB">
        <AboutLogoUI></AboutLogoUI>
    </div>
    <div className="marginB">
        <RegTextBoxUI text="CO2Calculator calculates your carbon emission rate and provides tips to reduce emissions."></RegTextBoxUI>
    </div>
    <div>
        <RegTextBoxUI text="Simply answer to the best of your ability and do your part to sustain the planet!"></RegTextBoxUI>
    </div>
    <div>
      <RoundButtonUI text="BACK" routeTo="/"></RoundButtonUI>
    </div>
  </AboutCont>
}
