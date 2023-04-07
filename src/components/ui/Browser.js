import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';



const StyledBrowser = styled(motion.div)`
    width: 100%;
    height: 100%;
`;

const Browser = () => {

    return (
        <StyledBrowser></StyledBrowser>
    );
};

export default Browser;