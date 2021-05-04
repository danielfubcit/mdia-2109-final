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
      <ResultHeadBoxUI text="Great!"></ResultHeadBoxUI>
    </div>
    <div className="marginB">
      <RegTextBoxUI text="Here’s what you can do to further help the environment" fontSize="26"></RegTextBoxUI>
    </div>
    <div className="marginB" onClick={onClick1}>
      {compress1 === false ? <FinalResultTextBoxUI /> : <FinalResultTextBoxExtandUI />}
    </div>
    <div className="marginB" onClick={onClick2}>
      {compress2 === false ? <FinalResultTextBoxUI text="Reuse &#38; Recycle" src="/recycle.svg" fontsize="26"></FinalResultTextBoxUI> : <FinalResultTextBoxExtandUI src="/recycle.svg" text="29% of greenhouse gas emmissions result from provision of goods."></FinalResultTextBoxExtandUI>}
    </div>
    <div className="marginB" onClick={onClick3}>
      {compress3 === false ? <FinalResultTextBoxUI text="Consider..." src="/public-transport.svg"></FinalResultTextBoxUI> : <FinalResultTextBoxExtandUI src="/public-transport.svg" text="carpooling or taking public transport to reduce the amount of gas emissions contributed to the environment."></FinalResultTextBoxExtandUI>}
    </div>
    <div className="marginB">
      <ButtonUI routeTo="/" bgcolor="#2C5A27" width="190" height="60" text="Return Home" fontSize="26"></ButtonUI>
    </div>
  </FinalResultCont>
}
