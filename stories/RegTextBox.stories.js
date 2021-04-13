import React from 'react';
import RegTextBoxUI from '../comps/RegTextBox';

export default {
    title:"Example/RegTextBox",
    component:<RegTextBoxUI />
}

export const DefaultRegTextBox = () => <RegTextBoxUI />

export const TextBoxTest = () => <RegTextBoxUI text1="A" text2="B" text3="C" text4="D" text5="E"/>

