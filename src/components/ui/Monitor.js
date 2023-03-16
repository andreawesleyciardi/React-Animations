import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import useMeasure from 'react-use-measure';



const StyledMonitor = styled(motion.div)`
    --width: 90vmin;
    --height: 56.25vmin;
    --depth: 20vmin;
    --hue: 30;
    --alpha: 0.8;

    --color: #000000;

    width: var(--width);
    height: var(--height);
    position: relative;
    // background: hsla(var(--hue), 50%, 50%, var(--alpha));

    perspective: 800px;
    transform-style: preserve-3d;
    perspective-origin: 50% 50%;

    transform: rotateX(0deg) rotateY(0deg);

    --border-thick: 2.75vmin;
    --border: var(--border-thick) solid var(--color);

    .monitor__face {
        position: absolute;
        background: hsla(var(--hue), 50%, 50%, var(--alpha));
        left: 50%;
        top: 50%;
        border: var(--border);
	    border-radius: 15px;
    }

    .monitor__face--front,
    .monitor__face--back {
        width: var(--width);
        height: var(--height);

        --hue: 220;
        --alpha: 0.6;
        --coeff: -0.5;

        transform: translate(-50%, -50%) translate3d(0, 0, calc(var(--depth) * var(--coeff)));
    }
    .monitor__face--front {
        --coeff: 0.5;
        // box-shadow: 2px 2px 5px 2px rgba(255,255,255,0.3);
    }
    // .monitor__face--front::after {
    //     content: "DELL";
    //     color: #FFFFFF;
    //     font-weight: 900;
    //     position: absolute;
    //     left: 50%;
    //     top: calc(100% + (var(--border-thick) / 2));
    //     transform: translateX(-50%) translateY(-50%);
    // }

    .monitor__face--left,
    .monitor__face--right {
        width: var(--depth);
        height: var(--height);

        --rotate: 90deg;
        --hue: 160;
        --alpha: 0.8;
        transform: translate(-50%, -50%) rotateY(var(--rotate)) translate3d(0, 0, calc(var(--width) * 0.5));
    }
    .monitor__face--left {
        --rotate: -90deg;
    }

    .monitor__face--top,
    .monitor__face--bottom {
        width: var(--width);
        height: var(--depth);

        --rotate: 90deg;
        --hue: 30;
        --alpha: 0.6;
        transform: translate(-50%, -50%) rotateX(var(--rotate)) translate3d(0, 0, calc(var(--height) * 0.5));
    }
    .monitor__face--bottom {
        --rotate: -90deg;
    }

    .monitor__face-corner {
        width: var(--width);
        height: var(--height);

        background: var(--color);
        position: absolute;
        border: var(--border);
        border-radius: 9px;
    }
    .monitor__face-corner--front,
    .monitor__face-corner--back {
        width: var(--width);
        height: var(--height);
    }
    .monitor__face-corner--front {
        transform: translateZ(calc(var(--depth) / 2 - 1px));
    }
    .monitor__face-corner--back {
        transform: rotateY(180deg) translateZ(calc(var(--depth) / 2 - 1px));
    }
    .monitor__face-corner--left,
    .monitor__face-corner--right {
        width: var(--depth);
        height: var(--height);
    }
    .monitor__face-corner--left {
        transform: rotateY(-90deg) translateZ(calc(var(--depth) / 2 - 1px));
    }
    .monitor__face-corner--right {
        transform: rotateY(90deg) translateZ(calc(var(--width) - (var(--depth) / 2) - 1px));
    }
    .monitor__face-corner--top,
    .monitor__face-corner--bottom {
        width: var(--width);
        height: var(--depth);
    }
    .monitor__face-corner--top {
        transform: rotateX(90deg) translateZ(calc(var(--depth) / 2 - 1px));
    }
    .monitor__face-corner--bottom {
        transform: rotateX(-90deg) translateZ(calc(var(--height) - (var(--depth) / 2) - 1px));
    }
    .monitor__face-corner--crux-x {
        width: var(--width);
        height: var(--depth);
        transform: rotateX(90deg) translateZ(calc(-1 * ((var(--height) / 2) - (var(--depth) / 2))));
    }
    .monitor__face-corner--crux-z {
        width: var(--depth);
        height: var(--height);
        transform: rotateY(90deg) translateZ(calc((var(--width) / 2) - (var(--depth) / 2)));
    }

    .monitor__screen {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        box-shadow: 2px 2px 5px 2px rgba(255,255,255,0.3);
    }
`;

const Monitor = ({children}) => {
    
    return (
        <StyledMonitor className="monitor">
            <div className="monitor__face monitor__face--front"><div className="monitor__screen">{children}</div></div>
            <div className="monitor__face monitor__face--back"></div>
            <div className="monitor__face monitor__face--left"></div>
            <div className="monitor__face monitor__face--right"></div>
            <div className="monitor__face monitor__face--top"></div>
            <div className="monitor__face monitor__face--bottom"></div>
            <div class="monitor__face-corner monitor__face-corner--front"></div>
			<div class="monitor__face-corner monitor__face-corner--back"></div>
			<div class="monitor__face-corner monitor__face-corner--left"></div>
			<div class="monitor__face-corner monitor__face-corner--right"></div>
			<div class="monitor__face-corner monitor__face-corner--top"></div>
			<div class="monitor__face-corner monitor__face-corner--bottom"></div>
			<div class="monitor__face-corner monitor__face-corner--crux-x"></div>
			<div class="monitor__face-corner monitor__face-corner--crux-y"></div>
			<div class="monitor__face-corner monitor__face-corner--crux-z"></div>
        </StyledMonitor>
    );
}

export default Monitor;