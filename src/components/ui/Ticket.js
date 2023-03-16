import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import useMeasure from 'react-use-measure';

import Button from './Button';



const StyledTicket = styled(motion.div)`
    width: 8rem;
    height: 8rem;
    padding: 1rem 2rem;
    background-color: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    z-index: 10;
`;

const Ticket = React.forwardRef(({type, title, description}, ref) => {
    const [refBounds, bounds] = useMeasure();

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
        }
    }

    return (
        <StyledTicket className="notification" variants={variants} initial="initial" animate="enter" ref={refBounds}>
            <div ref={ref}>
                <motion.h2>{title}</motion.h2>
                <Button>Read</Button>
            </div>
        </StyledTicket>
    );
});

const StyledAnimatedTicket = styled(Ticket)`
    position: absolute;
    z-index: 10;
`;

const AnimatedTicket = (props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.2 });

    useEffect(() => {
        //console.log("Element is in view: ", isInView);
    }, [isInView])

    return (
        <StyledAnimatedTicket {...props} ref={ref} />
    );
};

export { Ticket, AnimatedTicket };