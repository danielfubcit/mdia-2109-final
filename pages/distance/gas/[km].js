import Head from 'next/head'
import styled, { keyframes } from 'styled-components';
import React, {useState}  from 'react';
import MainTitleUI from '../../../comps/MainTitle';
import ResultTextBoxUI from '../../../comps/ResultTextBox';
import RegTextBoxUI from '../../../comps/RegTextBox';
import ImageUI from '../../../comps/Image';
import RoundButtonUI from '../../../comps/RoundButton';
import ButtonUI from '../../../comps/Button'
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

  .headbox {
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 280px;
    margin-bottom: 20px;
  }

`;

export default function FirstResult() {
  const router = useRouter();
  const {km} = router.query;

  var text1 = "";
  var text2 = "";
  var text3 = "";
  var bgcolor = "#45AFDD";
  var route = "";
  var sameRoute = "";

  if(km === "zero"){
    text1 = gaskm.zero.text1;
    text2 = gaskm.zero.text2;
    text3 = gaskm.zero.text3;
    route = gaskm.zero.route;
    sameRoute = gaskm.zero.sameRoute;
  }

  if(km === "twentyFive"){
    text1 = gaskm.twentyFive.text1;
    text2 = gaskm.twentyFive.text2;
    text3 = gaskm.twentyFive.text3;
    route = gaskm.twentyFive.route;
    sameRoute = gaskm.twentyFive.sameRoute;
  }

  if(km === "fifty"){
    text1 = gaskm.fifty.text1;
    text2 = gaskm.fifty.text2;
    text3 = gaskm.fifty.text3;
    bgcolor = gaskm.fifty.bgcolor;
    route = gaskm.fifty.route;
    sameRoute = gaskm.fifty.sameRoute;
  } 

  return <FirstResultCont>
    <Head>
      <title>First Result</title>
    </Head>
    <div className="marginT marginB">
        <MainTitleUI></MainTitleUI>
    </div>
    <div className="headbox">
      <ButtonUI width="130" height="35" fontSize="20" bgcolor="#3C99C1" animation="opacity" routeTo={sameRoute} text={text2}></ButtonUI>
      <ButtonUI width="130" height="35" fontSize="20" bgcolor="#3C99C1" animation="opacity" routeTo={sameRoute} text={text3}></ButtonUI>
    </div>
    <div className="marginB">
        <ResultTextBoxUI text1={text1} bgcolor={bgcolor}></ResultTextBoxUI>
    </div >
    <div>
        <RegTextBoxUI></RegTextBoxUI>
        <RegTextBoxUI zIndex="2" left="140" top="640" fontSize="18" delay="4s" position="absolute" animation="opacity" width="120" height="72" color="#759679" text="Click the car to see how we calculate"></RegTextBoxUI>
    </div>
    <div>
        <ImageUI routeTo="/measurement" zIndex = "1" position="absolute" animation="car" delay="3s" width="35" src="/sportcar.png"></ImageUI>
        <ImageUI routeTo={sameRoute} animation="moveUp" width="100" src="/greenfloor.png"></ImageUI>
    </div>
    <div>
    <RoundButtonUI delay="4.5s" position="absolute" animation="fadeIn" visibility="hidden" onClick={()=>router.push(route)} text="CONTINUE"></RoundButtonUI>
    </div>
  </FirstResultCont>
}
