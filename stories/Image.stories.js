import React from 'react';
import ImageUI from '../comps/Image';

export default {
    title:"Example/Image",
    component:<ImageUI />
}

export const DefaultImage = () => <ImageUI />

export const BigImage = () => <ImageUI height="500" width="500"/>