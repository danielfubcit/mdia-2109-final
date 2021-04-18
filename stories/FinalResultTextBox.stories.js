import React from 'react';
import FinalResultTextBoxUI from '../comps/FinalResultTextBox';

export default {
    title:"Example/FinalResultTextBox",
    component:<FinalResultTextBoxUI />
}

export const DefaultFinalResultTextBox = () => <FinalResultTextBoxUI />
export const FinalResultTextBox1 = () => <FinalResultTextBoxUI text="Reuse &#38; Recycle" src="/recycle.svg" fontsize="26"/>
export const FinalResultTextBox2 = () => <FinalResultTextBoxUI text="Consider..." src="/public-transport.svg"/>