import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { color, motion, useAnimationControls, useInView, useScroll, useTransform } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { mergeRefs } from 'react-merge-refs';

import toPx from './../../services/ToPx';

var convertCssUnits = require('css-unit-converter');



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const postitColors = [
    '#ff5db8',
    '#d4f635',
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
    position: absolute;
    z-index: 10;
    font-family: 'Permanent Marker';
`;

const Postit = React.forwardRef(({type, title, description, refBounds}, ref) => {
    const [backgroundColor, setBackgroundColor] = useState(null);
    const [fontSize, setFontSize] = useState(null);
    const [translate, setTranslate] = useState(null);

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
    }, []);

    return (
        backgroundColor &&
        fontSize &&
        translate &&
            <StyledPostit className="postit" ref={ref} style={{ backgroundColor: backgroundColor }}>
                <div>
                    <motion.h2 style={{ fontSize: fontSize, translate: translate }}>{title}</motion.h2>
                </div>
            </StyledPostit>
    );
});

const StyledAnimatedPostit = styled(motion.div)`
    width: ${postitDimension};
    height: ${postitDimension};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 10;
`;

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const AnimatedPostit = ({container, containerInView, x, y, deg, ...props}) => {
    const [positionX, setPositionX] = useState(null);
    const [positionY, setPositionY] = useState(null);
    const [rotate, setRotate] = useState(null);

    const ref = useRef(null);
    const refPostit = useRef(null);

    const controls = useAnimationControls();
    // const isInView = useInView(refPostit);

    const variants = {
        initial: {
            x: `${getRandomIntInclusive(1, 100)}vw`,
            scale: 5,
            opacity: 0
        }
    };

    useLayoutEffect(() => {
        if (container?.width > 0) {
            if ((positionX == null) || (positionY == null)) {
                const body = document.getElementsByTagName('body')[0];
                const vw = toPx(body, '1vw');
                const vh = toPx(body, '1vh');
                let randomX = x;
                let randomY = y;
                if ((x == null) || (y == null)) {
                    const postitDimensions = toPx(null, postitDimension);
                    const extra = parseInt(postitDimensions / 3);
                    const areaDimensions = container != null ? container : { width: toPx(body, '100vw'), height: toPx(body, '100vh') };
                    if (x == null) {
                        randomX = getRandomIntInclusive(-extra, (areaDimensions.width - (extra * 2)));
                    }
                    if (y == null) {
                        randomY = getRandomIntInclusive(-extra, (areaDimensions.height - (extra * 2)));
                    }
                }
                setPositionX(`${randomX / vw}vw`);
                setPositionY(`${randomY / vh}vh`);
            }
            if (rotate == null) {
                setRotate(`${getRandomIntInclusive(-15, 15)}deg`);
            }
        }
    }, [container]);

    // useEffect(() => {
    //     if (((isInView == true) || (positionX)) && (hasAnimated == false)) {
    //         setHasAnimated(true);
    //     }
    // }, [isInView]);

    useEffect(() => {
        if ((positionX != null) && (positionY != null) && (containerInView != false)) {
            controls.start({
                x: positionX,
                y: positionY,
                scale: 1,
                opacity: 1,
                transition: {
                    duration: 1.5
                }
            });
        }
    }, [positionX, positionY, containerInView]);

    return (
            positionX &&
            positionY &&
                <StyledAnimatedPostit variants={variants} initial="initial" animate={controls} style={{ rotate: rotate }} ref={ref}>
                    <Postit {...props} ref={refPostit}></Postit>
                </StyledAnimatedPostit>
    );
};

export { Postit, AnimatedPostit };