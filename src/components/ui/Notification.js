import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, filterProps } from 'framer-motion';
import useMeasure from 'react-use-measure';

import Button from './Button';



const StyledCollapsedNotification = styled(motion.div)`
    padding: 1rem 2rem;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    top: 3rem;
    z-index: 99;
`;

const StyledExpandedNotification = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    display: flex;
    padding: 2rem;
    place-content: center;
    place-items: center;
    pointer-events: none;
    div {
        width: 80%;
        height: auto;
        background-color: #FFFFFF;
        padding:3rem 5rem;
        position: absolute;
        overflow: hidden;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        flex: 1 1 auto;
        pointer-events: all;
        will-change: transform;
    }
`;

const Notification = ({title, subtitle, content}) => {
    const [isCollapsed, setIsCollapsed] = useState(null);
    const [layoutId, setLayoutId] = useState(Math.random() * 10);
    const [refCollapsed, bounds] = useMeasure();

    const variants = {
        initial: {
            x: '100vw',
            opacity: 0
        },
        enter: {
            x: `calc(100vw - ${bounds.width}px - 3rem)`,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        },
        exit: {
            y: '-100vh',
            opacity: 0,
            transition: {
                duration: 1
            },
            transitionEnd: {
                display: 'none'
            }
        }
    };
    
    return (
        <>
            {
                isCollapsed == null
                &&
                    <StyledCollapsedNotification className="notification" layoutId={`notification-${layoutId}`} variants={variants} initial="initial" animate="enter" ref={refCollapsed}>
                        <motion.h2>{title}</motion.h2>
                        {
                            subtitle
                            &&
                                <motion.h5>{subtitle}</motion.h5>
                        }
                        <Button onClick={() => setIsCollapsed(true)}>Read</Button>
                    </StyledCollapsedNotification>
            }

            <AnimatePresence>
                {
                    isCollapsed
                    &&
                        <StyledExpandedNotification className="test" layoutId={`notification-${layoutId}`} variants={variants} exit="exit">
                            <div>
                                <motion.h2>{title}</motion.h2>
                                <motion.h5>{subtitle}</motion.h5>
                                
                                <motion.p>{content}</motion.p>
                                <Button onClick={() => setIsCollapsed(false)}>Close</Button>
                            </div>
                        </StyledExpandedNotification>
                }
            </AnimatePresence>
        </>
    );
}

export default Notification;