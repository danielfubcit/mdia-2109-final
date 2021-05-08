import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ImageCont = styled.div`
    width: ${props=>props.width}%;
    height: auto;
    position: ${prop=>prop.position};
    z-index: ${prop=>prop.zIndex};
    animation-name: ${prop=>prop.animation};
    animation-duration: 2s;  
    animation-delay: ${prop=>prop.delay};
    animation-fill-mode: both;

    @keyframes moveUp{
        from {bottom: -500px;}
        to {bottom: 0px;}
    }

    @keyframes moveLeft{
        from {
            right: -500px;
            bottom: 0px;
        }
        to {right: -350px;
            bottom:-120px;
        }
    }
`;

const ImageInput = styled.img`
    width: ${props=>props.width}%;
    position: ${prop=>prop.position};
    z-index: ${prop=>prop.zIndex};
    height: auto;
`;

//props
const ImageUI = ({
    width = 30,
    src = "/greenCar.svg",
    position = "relative",
    animation = "",
    delay = "1s",
    zIndex = ""
}) => {
    const router = useRouter();
    return <ImageCont zIndex={zIndex} position={position} animation={animation} delay={delay} onClick={()=>router.push(routeTo)}>
         <ImageInput width={width} src={src} /> 
    </ImageCont>
}

export default ImageUI;