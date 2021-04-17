import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ImageCont = styled.div`
    width: ${props=>props.width}%;
    height: auto;
`;

const ImageInput = styled.img`
    width: ${props=>props.width}%;
    height: auto;
`;

//props
const ImageUI = ({
    width = 30,
    src = "/greenCar.svg"
}) => {
    const router = useRouter();
    return <ImageCont onClick={()=>router.push(routeTo)}>
         <ImageInput width={width} src={src} /> 
    </ImageCont>
}

export default ImageUI;