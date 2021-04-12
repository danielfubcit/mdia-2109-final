import React from 'react';
import ButtonUI from '../comps/Button';

export default {
    title:"Example/Button",
    component:<ButtonUI />
}

export const DefaultButton = () => <ButtonUI />

export const ColorButton = () => <ButtonUI bgcolor="red"/>

export const TextButton = () => <ButtonUI text=" yes"/>