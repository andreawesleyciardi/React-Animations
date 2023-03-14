import React from 'react';
import styled from 'styled-components';

import loader from './../../assets/images/loader.png';



const StyledLoader = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }

    img {
        width: 4rem;
        animation: rotation 2s linear infinite;
    }
`;

const Loader = () => (
    <StyledLoader className="loader">
        <img src={loader} alt="loader" />
    </StyledLoader>
);

export default Loader;