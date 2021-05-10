import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const LinkCont = styled.div`
    width: 180px;
    height: 28px;
    
`
const LinkA = styled.div `
    font-family: 'Roboto Condensed', sans-serif;
    color: white;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    text-decoration-line: underline;
` 

//props
const LinkUI = ({
    routeTo="/about",
    text = "about this app"
}) => {
    const router = useRouter();
    return <LinkCont onClick={()=>router.push(routeTo)}>
        <LinkA>{text}</LinkA>
    </LinkCont>
}

export default LinkUI;
    