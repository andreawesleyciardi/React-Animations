import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { getRandomIntInclusive } from './../../services/Utilities';
import toPx from './../../services/ToPx';



const postitColors = [
    '#ff5db8',
    '#a6f600',
    '#ffb32e',
    '#eff56d'
];

const postitDimension = '14rem';

const StyledPostit = styled(motion.div)`
    width: ${postitDimension};
    height: ${postitDimension};
    padding: 1rem 2rem;
    box-shadow: 0px 1px 2px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-family: 'Permanent Marker';
`;

const Postit = React.forwardRef(({children}, ref) => {
    const [backgroundColor, setBackgroundColor] = useState(null);
    const [fontSize, setFontSize] = useState(null);
    const [translate, setTranslate] = useState(null);
    const [rotate, setRotate] = useState(null);

    useLayoutEffect(() => {
        if (backgroundColor == null) {
            setBackgroundColor(postitColors[getRandomIntInclusive(0, (postitColors.length - 1))]);
        }
        if (fontSize == null) {
            setFontSize(`${Math.random() + 1}rem`);
        }
        if (translate == null) {
            setTranslate(`${Math.random() + getRandomIntInclusive(-1, 1)}rem ${Math.random() + getRandomIntInclusive(-1, 1)}rem`);
        }
        if (rotate == null) {
            setRotate(`${getRandomIntInclusive(-15, 15)}deg`);
        }
    }, []);

    return (
        backgroundColor &&
        fontSize &&
        translate &&
        rotate &&
            <StyledPostit className="postit" ref={ref} style={{ backgroundColor: backgroundColor }}>
                <h2 style={{ rotate: rotate, fontSize: fontSize, translate: translate }}>{children}</h2>
            </StyledPostit>
    );
});

const getPostitAnimationParameters = (container) => {
    const body = document.getElementsByTagName('body')[0];
    const vw = toPx(body, '1vw');
    const vh = toPx(body, '1vh');
    const postitDimensions = toPx(null, postitDimension);
    const extra = parseInt(postitDimensions / 3);
    const areaDimensions = container != null ? container : { width: toPx(body, '100vw'), height: toPx(body, '150vh') };
    let randomX = getRandomIntInclusive(-extra, (areaDimensions.width - (extra * 2)));
    let randomY = getRandomIntInclusive(-extra, (areaDimensions.height - (extra * 2)));

    return { x: `${randomX / vw}vw`, y: `${randomY / vh}vh`, rotate: `${getRandomIntInclusive(-15, 15)}deg` };
}

export { Postit, getPostitAnimationParameters };