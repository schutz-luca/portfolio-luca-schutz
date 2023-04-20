import styled from "styled-components";
import { motion } from "framer-motion";

export const StyLoading = styled(motion.div)`
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background: ${({ theme }) => theme.background};
    z-index: 10;

    div{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    svg {
        /* transform: translate(-50%, -50%); */
        margin-bottom: 40px;
        height: 150px;
        width: 150px;
    }

    p{
        font-style: italic;
    }
`