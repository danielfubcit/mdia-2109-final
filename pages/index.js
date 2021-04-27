import Head from 'next/head'
import styled from 'styled-components';
import React, {useState}  from 'react';
import ImageUI from '../comps/Image';
import MainTitleUI from '../comps/MainTitle';
import RoundButtonUI from '../comps/RoundButton';

const HomeCont = styled.div`
  margin:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #79CFE2;
  height:100vh;

  .img, .title, .button{
    margin:50px;
  }
`;

export default function Home() {
  return <HomeCont>
    <Head>
      <title>Home Page</title>
    </Head>
    <div className="img">
      <ImageUI src="/appLogo.svg" width="100"></ImageUI>
    </div>
    <div className="title">
      <MainTitleUI fontsize="24" color="white" text="TEST YOUR CARBON EMISSION RATE"></MainTitleUI>
    </div>
    <div className="button">
      <RoundButtonUI></RoundButtonUI>
    </div>
  </HomeCont>
}
