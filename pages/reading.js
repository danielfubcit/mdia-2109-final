import Head from 'next/head'
import styled from 'styled-components';
import ButtonUI from '../comps/Button';
import QuestionTextboxUI from '../comps/QuestionTextBox';

const ReadingCont = styled.div`
    margin:0;
    display: flex;
    flex-direction: column;
    background-color: #79CFE2;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .item {
        margin-bottom: 50px;
    }

    .top {
        margin-top: 100px;
    }

    .bottom {
        margin-bottom: 100px;
    }
`;

export default function Reading() {
 
  return <ReadingCont>
    <Head>
      <title>Additional Reading</title>
    </Head>
    <div className="item top">
        <QuestionTextboxUI fontsize="25" animation="sizeChange" width="60" text="Visit these resources for additional reading:" src="/book.png"></QuestionTextboxUI>
    </div>
    <div className="item">
        <ButtonUI animation="moveToRight" delay="0.5s" routeTo="//www.earthhero.com/carbon-emissions/" text="What are Carbon Emissions?"></ButtonUI>
    </div>
    <div className="item">
        <ButtonUI animation="moveToRight" delay="0.75s" routeTo="//www.nrcan.gc.ca/energy/vehicle-emission-comparison-tool/18907" text="Is your vehicle green?"></ButtonUI>
    </div>
    <div className="bottom">
      <ButtonUI routeTo="/" bgcolor="#2C5A27" width="190" height="60" text="Return Home" fontSize="26"></ButtonUI>
    </div>
  </ReadingCont>
}
