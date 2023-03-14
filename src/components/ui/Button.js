import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useMeasure from 'react-use-measure';



const StyledButton = styled(motion.button)`
    width: auto;
    height: auto;
    background-color: var(--primary);
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
`;

const Button = ({children, ...props}) => {
    return (
        <StyledButton as={motion.button} className="button" {...props}>
            {children}
        </StyledButton>
    );
}

export default Button;