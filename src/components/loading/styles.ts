import styled from 'styled-components';
import { motion } from 'framer-motion';
import { devices } from '@/src/styles/devices';
import { StyLogo } from '../logo/styles';

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
        height: 150px;
        width: 150px;
    }

    ${StyLogo}{
        width: 80%;
        height: 80%;

        .react-icon{
            padding: 30px;
            margin-bottom: 0;
        }
    }
`;