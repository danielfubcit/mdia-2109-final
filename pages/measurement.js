import Head from 'next/head'
import styled from 'styled-components';
import React, {useState}  from 'react';
import AboutLogoUI from '../comps/AboutLogo';
import RoundButtonUI from '../comps/RoundButton';
import RegTextBoxUI from '../comps/RegTextBox';
import {useRouter} from 'next/router';

const MeasurementCont = styled.div`
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

export default function Measurement() {
    const router = useRouter();
  return <MeasurementCont>
    <Head>
      <title>Measurement</title>
    </Head>
    <div className="marginB">
        <AboutLogoUI src="/co2.png" fontsize="30" text="How to measure CO2 Emissions"></AboutLogoUI>
    </div>
    <div className="marginB">
        <RegTextBoxUI text="An average consumption of 5 liters/100 km corresponds to 5 l x 2640 g/l / 100 (per km) = 132 g CO2/km."></RegTextBoxUI>
    </div>
    <div>
        <RegTextBoxUI text="Petrol: 1 liter of petrol weighs 750 grammes."></RegTextBoxUI>
    </div>
    <div>
        <RegTextBoxUI text="Petrol consists for 87% of carbon, or 652 grammes of carbon per liter of petrol."></RegTextBoxUI>
    </div>
    <div>
      <RoundButtonUI text="BACK" onClick={()=>router.back()}></RoundButtonUI>
    </div>
  </MeasurementCont>
}
