import Head from 'next/head'
import styled from 'styled-components';
import React, {useState}  from 'react';
import {useRouter} from 'next/router';
import ButtonUI from '../../comps/Button';
import QuestionTextboxUI from '../../comps/QuestionTextBox';
import {vehicles} from '../../data/texts';

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

  var route1 = "";
  var route2 = "";
  var route3 = "";

  if(vehicle === "gas"){
    route1 = vehicles.gas.route1;
    route2 = vehicles.gas.route2;
    route3 = vehicles.gas.route3;
  }

  if(vehicle === "electric"){
    route1 = vehicles.electric.route1;
    route2 = vehicles.electric.route2;
    route3 = vehicles.electric.route3;
  }

  if(vehicle === "hybrid"){
    route1 = vehicles.hybrid.route1;
    route2 = vehicles.hybrid.route2;
    route3 = vehicles.hybrid.route3;
  }
 
  return <DistanceCont>
    <Head>
      <title>Vehicle Selection</title>
    </Head>
    <div className="back">
    <ButtonUI routeTo="/vehicleSelection" bgcolor="#2C5A27" width="130" height="60" text="Back" fontSize="26"></ButtonUI>
    </div>
    <div className="body">
        <div className="item">
            <QuestionTextboxUI animation="sizeChange" width="50" text="Distance driven today" src="/gps.png"></QuestionTextboxUI>
        </div>
        <div className="item">
            <ButtonUI routeTo={route1} text="0 - 25 km"></ButtonUI>
        </div>
        <div className="item">
            <ButtonUI routeTo={route2} text="26 - 50 km"></ButtonUI>
        </div>
        <div className="item">
            <ButtonUI routeTo={route3} text="50+ km"></ButtonUI>
        </div>
    </div>
  </DistanceCont>
}
