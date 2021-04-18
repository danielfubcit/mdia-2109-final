import React from 'react';
import InfoTextBoxUI from '../comps/InfoTextBox';

export default {
    title:"Example/InfoTextBox",
    component:<InfoTextBoxUI />
}

export const DefaultInfoTextBox = () => <InfoTextBoxUI />
export const InfoTextBox2 = () => <InfoTextBoxUI text="Worldwide, SUVs are the 2nd larget contributor to CO2 increase this decade, surpassed only by power generation."/>