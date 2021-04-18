import React from 'react';
import FinalResultTextBoxExtendUI from '../comps/FinalResultTextBoxExtend';

export default {
    title:"Example/FinalResultTextBoxExtend",
    component:<FinalResultTextBoxExtendUI />
}

export const DefaultFinalResultTextBoxExtend = () => <FinalResultTextBoxExtendUI />
export const FinalResultTextBoxExtend1 = () => <FinalResultTextBoxExtendUI text="29% of greenhouse gas emmissions result from provision of goods." src="/recycle.svg"/>
export const FinalResultTextBoxExtend2 = () => <FinalResultTextBoxExtendUI text="Carpooling or taking public transport to reduce the amount of gas emissions contributed to the environment." src="/public-transport.svg"/>