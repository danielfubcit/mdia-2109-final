//DistanceSelection/gas
//DistanceSelection/electric
//DistanceSelection/hybrid

import Head from 'next/head'
import styled from 'styled-components';
import React, {useState}  from 'react';
import ButtonUI from '../comps/Button';
import QuestionTextboxUI from '../comps/QuestionTextBox';
import { useRouter } from 'next/router';

const subtext = {
    gas:{

    },

    electric:{

    },

    hybrid:{

    }
}

const DistanceCont = styled.div`
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

export default function Distance() {
    const router = useRouter();
    const {vehicle} = router.query;
 
  return <DistanceCont>
    <Head>
      <title>Vehicle Selection</title>
    </Head>
    <div className="back">
    <ButtonUI routeTo="/vehicleSelection" bgcolor="#2C5A27" width="130" height="60" text="Back" fontSize="26"></ButtonUI>
    </div>
    <div className="body">
        <div className="item">
            <QuestionTextboxUI width="50" text="Distance driven today" src="/gps.png"></QuestionTextboxUI>
        </div>
        <div className="item">
            <ButtonUI routeTo="factPage" text= "0 - 25 km"></ButtonUI>
        </div>
        <div className="item">
            <ButtonUI routeTo="factPage" text="26 - 50 km"></ButtonUI>
        </div>
        <div className="item">
            <ButtonUI routeTo="factPage" text="50+ km"></ButtonUI>
        </div>
    </div>
  </DistanceCont>
}
