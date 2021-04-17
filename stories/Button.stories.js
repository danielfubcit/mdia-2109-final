import React from 'react';
import ButtonUI from '../comps/Button';

export default {
    title:"Example/Button",
    component:<ButtonUI />
}

export const DefaultButton = () => <ButtonUI />

export const BackButton = () => <ButtonUI bgcolor="#2C5A27" width="130" height="60" text="Back" fontSize="26"/>

export const ReturnHomeButton = () => <ButtonUI bgcolor="#2C5A27" width="190" height="60" text="Return Home" fontSize="26"/>

export const SmallButton = () => <ButtonUI bgcolor="#9AC397" width="170" text="Yes"/>