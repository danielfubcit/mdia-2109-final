import React from 'react';
import QuestionTextBoxUI from '../comps/QuestionTextBox';

export default {
    title:"Example/QuestionTextBox",
    component:<QuestionTextBoxUI />
}

export const DefaultQuestionTextBox = () => <QuestionTextBoxUI />

export const QuestionTextBox2 = () => <QuestionTextBoxUI text1="black" spantext=" white" text2=" black"/>
