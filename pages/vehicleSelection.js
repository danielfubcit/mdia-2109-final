import Head from 'next/head'
import styled from 'styled-components';
import React, {useState}  from 'react';
import ButtonUI from '../comps/Button';
import QuestionTextboxUI from '../comps/QuestionTextBox';


const VehicleCont = styled.div`
  margin:0;
  display: flex;
  flex-direction: column;
  background-color: #79CFE2;

  .back {
      margin: 10px 10px 100px 10px;
      display: flex;
      justify-content: flex-start;
  }

  .body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .item {
      margin-bottom: 40px;
  }
`;

export default function Vehicle() {
  return <VehicleCont>
    <Head>
      <title>Vehicle Selection</title>
    </Head>
    <div className="back">
    <ButtonUI routeTo="/" bgcolor="#2C5A27" width="130" height="60" text="Back" fontSize="26"></ButtonUI>
    </div>
    <div className="body">
        <div className="item">
            <QuestionTextboxUI></QuestionTextboxUI>
        </div>
        <div className="item">
            <ButtonUI></ButtonUI>
        </div>
        <div className="item">
            <ButtonUI text="ELECTRIC"></ButtonUI>
        </div>
        <div className="item">
            <ButtonUI text="HYBRID"></ButtonUI>
        </div>
    </div>
  </VehicleCont>
}
