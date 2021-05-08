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
      <ResultHeadBoxUI></ResultHeadBoxUI>
    </div>
    <div className="marginB">
      <RegTextBoxUI text="Here’s what you can do to further help the environment" fontSize="26"></RegTextBoxUI>
    </div>
    <div className="marginB" onClick={onClick1}>
      {compress1 === false ? <FinalResultTextBoxUI></FinalResultTextBoxUI> : <FinalResultTextBoxExtandUI />}
    </div>
    <div className="marginB" onClick={onClick2}>
      {compress2 === false ? <FinalResultTextBoxUI delay="3s" text="Consume Less" src="/eating.svg" fontsize="28"></FinalResultTextBoxUI> : <FinalResultTextBoxExtandUI src="/eating.svg" text="red meat and agriculture use contributes to carbon emissions."></FinalResultTextBoxExtandUI>}
    </div>
    <div className="marginB" onClick={onClick3}>
      {compress3 === false ? <FinalResultTextBoxUI delay="4s" text="Reuse &#38; Recycle" src="/recycle.svg" fontsize="26"></FinalResultTextBoxUI> : <FinalResultTextBoxExtandUI src="/recycle.svg" text="29% of greenhouse gas emmissions result from provision of goods."></FinalResultTextBoxExtandUI>}
    </div>
    <div className="marginB">
      <ButtonUI routeTo="/" bgcolor="#2C5A27" width="190" height="60" text="Return Home" fontSize="26"></ButtonUI>
    </div>
  </FinalResultCont>
}
