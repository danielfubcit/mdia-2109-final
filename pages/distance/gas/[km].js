import Head from 'next/head'
import styled, { keyframes } from 'styled-components';
import React, {useState}  from 'react';
import MainTitleUI from '../../../comps/MainTitle';
import ResultTextBoxUI from '../../../comps/ResultTextBox';
import RegTextBoxUI from '../../../comps/RegTextBox';
import ImageUI from '../../../comps/Image';
import RoundButtonUI from '../../../comps/RoundButton';
import {useRouter} from 'next/router';
import {gaskm} from '../../../data/texts';

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

`;

export default function FirstResult() {
  const router = useRouter();
  const {km} = router.query;

  var text1 = "";
  var bgcolor = "#45AFDD";
  var route = "";

  if(km === "zero"){
    text1 = gaskm.zero.text1;
    route = gaskm.zero.route;
  }

  if(km === "twentyFive"){
    text1 = gaskm.twentyFive.text1;
    route = gaskm.twentyFive.route;
  }

  if(km === "fifty"){
    text1 = gaskm.fifty.text1;
    bgcolor = gaskm.fifty.bgcolor;
    route = gaskm.fifty.route;
  } 

  return <FirstResultCont>
    <Head>
      <title>First Result</title>
    </Head>
    <div className="marginT marginB">
        <MainTitleUI></MainTitleUI>
    </div>
    <div className="marginB">
        <ResultTextBoxUI text1={text1} bgcolor={bgcolor}></ResultTextBoxUI>
    </div >
    <div>
        <RegTextBoxUI></RegTextBoxUI>
    </div>
    <div>
        <ImageUI animation="moveUp" width="100" src="/carongreen.png"></ImageUI>
    </div>
    <div>
        <RoundButtonUI position="absolute" animation="fadeIn" visibility="hidden" routeTo={route} text="CONTINUE"></RoundButtonUI>
    </div>
  </FirstResultCont>
}
