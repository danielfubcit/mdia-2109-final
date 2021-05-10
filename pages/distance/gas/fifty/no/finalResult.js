import Head from 'next/head'
import styled from 'styled-components';
import React, {useState}  from 'react';
import ImageUI from '../../../../../comps/Image';
import ResultHeadBoxUI from '../../../../../comps/ResultHeadBox'
import RegTextBoxUI from '../../../../../comps/RegTextBox'
import FinalResultTextBoxUI from '../../../../../comps/FinalResultTextBox'
import FinalResultTextBoxExtandUI from '../../../../../comps/FinalResultTextBoxExtend'
import ButtonUI from '../../../../../comps/Button';


const FinalResultCont = styled.div`
  margin:0;
  display: flex;
  flex-direction: column;
  background-color: #79CFE2;
  justify-content: center;
  align-items: center;

  .title {
    margin-top: 50px;
    margin-bottom:120px;
  }

  .marginB {
    margin-bottom: 40px;
  }
`;

export default function FinalResult() {
  const [compress1, setCompress1] = useState(false);
  const [compress2, setCompress2] = useState(false);
  const [compress3, setCompress3] = useState(false);

  console.log("meunstate: ", compress1);

  const onClick1 = () => {
    setCompress1(!compress1);
    setCompress2(false);
    setCompress3(false);
  }

  const onClick2 = () => {
    setCompress2(!compress2);
    setCompress1(false);
    setCompress3(false);
  }

  const onClick3 = () => {
    setCompress3(!compress3);
    setCompress1(false);
    setCompress2(false);
  }

  return <FinalResultCont>
    <Head>
      <title>Final Result</title>
    </Head>
    <div className="title">
      <ResultHeadBoxUI text="Oh No!" bgcolor="#FA9AAB"></ResultHeadBoxUI>
    </div>
    <div className="marginB">
      <RegTextBoxUI text="Consider doing more to help the environment, such as:" fontSize="26"></RegTextBoxUI>
    </div>
    <div className="marginB" onClick={onClick1}>
      {compress1 === false ? <FinalResultTextBoxUI text="Walk or ride" src="/bicycle.svg" fontsize="30"></FinalResultTextBoxUI> : <FinalResultTextBoxExtandUI src="/bicycle.svg" text="When Possible walk or ride your bike. Not only does it help the environment, it’s healthy!"></FinalResultTextBoxExtandUI>}
    </div>
    <div className="marginB" onClick={onClick2}>
      {compress2 === false ? <FinalResultTextBoxUI delay="3s" text="Reduce CO2" src="/carbon-dioxide.svg" fontsize="28"></FinalResultTextBoxUI> : <FinalResultTextBoxExtandUI src="/carbon-dioxide.svg" text="Carpooling or taking public transport helps reduce CO2 emissions."></FinalResultTextBoxExtandUI>}
    </div>
    <div className="marginB" onClick={onClick3}>
      {compress3 === false ? <FinalResultTextBoxUI delay="4s" text="Slow down!" src="/clock.svg" fontsize="30"></FinalResultTextBoxUI> : <FinalResultTextBoxExtandUI src="/clock.svg" text="Speeding and unneccesary acceleration reduces mileage by up to 33% and increases CO2 emissions."></FinalResultTextBoxExtandUI>}
    </div>
    <div className="marginB">
      <ButtonUI routeTo="/reading" bgcolor="#2C5A27" width="190" height="60" text="Next" fontSize="26"></ButtonUI>
    </div>
  </FinalResultCont>
}
