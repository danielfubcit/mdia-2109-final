import React from 'react';
import MainTitleUI from '../comps/MainTitle';

export default {
    title:"Example/MainTitle",
    component:<MainTitleUI />
}

export const DefaultMainTitle = () => <MainTitleUI />
export const WhiteMainTitle = () => <MainTitleUI fontsize="24" color="white" text="TEST YOUR CARBON
EMISSION RATE"/>

