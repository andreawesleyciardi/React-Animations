// @import url(https://fonts.googleapis.com/css?family=Permanent+Marker);
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimationControls, useInView } from 'framer-motion';
import useMeasure from 'react-use-measure';

import './Postit2.scss';



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const postitColors = [
    '#ff5db8',
    '#d3ec5d',
    '#ffb32e',
    '#eff56d'
];

const postitDimension = '12rem';

const StyledPostit = styled(motion.div)`
    width: ${postitDimension};
    height: ${postitDimension};
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    z-index: 10;
    font-family: 'Permanent Marker';
`;

const Postit = React.forwardRef(({type, title, description, refBounds}, ref) => {
    const color = postitColors[getRandomIntInclusive(0, (postitColors.length - 1))];
    return (
        <StyledPostit ref={ref}>
            <div className="wind-paper" style={{backgroundColor: `${color}`}}>
                <motion.h2 style={{ rotate: `${getRandomIntInclusive(-15, 15)}deg`, fontSize: `${Math.random() + 1}rem`, translate: `${Math.random() + getRandomIntInclusive(-1, 1)}rem ${Math.random() + getRandomIntInclusive(-1, 1)}rem` }}>{title}</motion.h2>
                <div style={{backgroundColor: `${color}`}}>
                    <div style={{backgroundColor: `${color}`}}>
                        <div style={{backgroundColor: `${color}`}}>
                            <div style={{backgroundColor: `${color}`}}>
                                <div style={{backgroundColor: `${color}`}}>
                                    <div style={{backgroundColor: `${color}`}}>
                                        <div style={{backgroundColor: `${color}`}}>
                                            <div style={{backgroundColor: `${color}`}}>
                                                <div style={{backgroundColor: `${color}`}}>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

const AnimatedPostit = ({container, x, y, deg, ...props}) => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const controls = useAnimationControls();
    const ref = useRef(null);
    const isInView = useInView(ref);

    const variants = {
        initial: {
            x: `${getRandomIntInclusive(1, 100)}vw`,
            scale: 5,
            opacity: 0
        },
        enter: {
            x: x || `${getRandomIntInclusive(1, 100)}vw`,
            y: y || `${getRandomIntInclusive(1, 100)}vh`,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1.5
            }
        }
    }

    useEffect(() => {
        console.log("Element is in view: ", isInView);
        if ((isInView == true) && (hasAnimated == false)) {
            setHasAnimated(true);
        }
    }, [isInView])

    useEffect(() => {
        if (hasAnimated == true) {
            let randomX = getRandomIntInclusive(1, (container.width || 100));
            let randomY = getRandomIntInclusive(1, (container.height || 100));
            const coeffHigh = `${(parseInt(postitDimension) / 3) * 2}rem`;
            const coeffLow = `${parseInt(postitDimension) / 3}rem`;
            controls.start({
                x: x || `max(min(calc(${container.width != null ? (container.width + 'px') : '100vw'} - ${coeffHigh}), ${randomX + (container.width != null ? 'px' : '100vw')}), -${coeffLow})`,
                y: y || `max(min(calc(${container.height != null ? (container.height + 'px') : '100vh'} - ${coeffHigh}), ${randomY + (container.height != null ? 'px' : '100vh')}), -${coeffLow})`,
                scale: 1,
                opacity: 1,
                transition: {
                    duration: 1.5
                }
            });
        }
    }, [hasAnimated])

    return (
        // <StyledAnimatedPostit variants={variants} initial="initial" animate="enter" viewport={{ once: true }}>
        <StyledAnimatedPostit variants={variants} initial="initial" animate={controls}>
            <Postit {...props} ref={ref}></Postit>
        </StyledAnimatedPostit>
    );
};

export { Postit, AnimatedPostit };