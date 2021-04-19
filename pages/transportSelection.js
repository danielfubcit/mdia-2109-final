import Head from 'next/head'
import styled from 'styled-components';
import React, {useState}  from 'react';
import ButtonUI from '../comps/Button';
import QuestionTextbox2ndUI from '../comps/QuestionTextBox2nd';


const TransportCont = styled.div`
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

export default function Transport() {
  return <TransportCont>
    <Head>
      <title>Transport Selection</title>
    </Head>
    <div className="back">
    <ButtonUI routeTo="factPage" bgcolor="#2C5A27" width="130" height="60" text="Back" fontSize="26"></ButtonUI>
    </div>
    <div className="body">
        <div className="item">
            <QuestionTextbox2ndUI></QuestionTextbox2ndUI>
        </div>
        <div className="item">
            <ButtonUI routeTo="finalResult" width="170" text="Yes"></ButtonUI>
        </div>
        <div className="item">
            <ButtonUI routeTo="finalResult" width="170" text="No"></ButtonUI>
        </div>
    </div>
  </TransportCont>
}