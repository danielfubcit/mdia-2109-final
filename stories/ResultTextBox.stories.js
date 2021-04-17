import React from 'react';
import ResultTextBoxUI from '../comps/ResultTextBox';

export default {
    title:"Example/ResultTextBox",
    component:<ResultTextBoxUI />
}

export const DefaultResultTextBox = () => <ResultTextBoxUI />

export const ResultTextBox2 = () => <ResultTextBoxUI text1="15kg" />

export const ResultTextBox3 = () => <ResultTextBoxUI text1="15kg" bgcolor="orange"/>