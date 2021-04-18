import React from 'react';
import ResultHeadBoxUI from '../comps/ResultHeadBox';

export default {
    title:"Example/ResultHeadBox",
    component:<ResultHeadBoxUI />
}

export const DefaultResultHeadBox = () => <ResultHeadBoxUI />
export const ResultHeadBox1 = () => <ResultHeadBoxUI text="Great"/>
export const ResultHeadBox2 = () => <ResultHeadBoxUI text="Oh No!" bgcolor="#FA9AAB"/>