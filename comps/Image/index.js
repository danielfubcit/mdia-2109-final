import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ImageCont = styled.span`
    width: ${props=>props.width}px,
    height: ${props=>props.height}px
`;

const ImageInput = styled.img`
    width: ${props=>props.width}px,
    height: ${props=>props.height}px
`;

//props
const ImageUI = ({
    width = 189,
    height = 189,
    src = "/vercel.svg"
}) => {
    const router = useRouter();
    return <ImageCont onClick={()=>router.push(routeTo)}>
         <ImageInput width={width} height={height} src={src} /> 
    </ImageCont>
}

export default ImageUI;