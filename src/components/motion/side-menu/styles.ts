import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StySideMenu = styled(motion.nav)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    height: 100vh;
    z-index: 12;

    &.closed {
        pointer-events: none;

        .background {
            transition: all ease-out 0.3s;
            background: ${({ theme }) => theme.colors.white};
        }
    }

    .menu-toggle {
        pointer-events: visible;
        position: absolute;
        z-index: 1;
        outline: none;
        border: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        cursor: pointer;
        position: absolute;
        top: 5px;
        right: 20px;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.white};
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .background {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 300px;
        background: ${({ theme }) => theme.colors.darkGray};
        pointer-events: none;
    }

    ul,
    li {
        margin: 0;
        padding: 0;
    }

    ul {
        padding: 25px;
        position: absolute;
        top: 100px;
        width: 230px;
        display: flex;
        flex-direction: column;
        right: 30px;
    }

    li {
        list-style: none;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    svg {
        padding-top: 2px;
    }

    .icon-placeholder {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        flex: 40px 0;
        margin-right: 20px;
    }

    .text-placeholder {
        border-radius: 5px;
        width: 200px;
        height: 20px;
        flex: 1;
    }

    .sm-item {
        width: 200px;
        height: 20px;
        flex: 1;

        .theme-item{

        }

        font-size: 1.5rem;
        
        &:hover{
            color: ${({ theme }) => theme.primary};
        }

        a {
            display: flex;
            color: ${({ theme }) => theme.colors.white};
            font-size: 1.5rem;

            &:hover{
                color: ${({ theme }) => theme.primary};
            }
        }

        &.theme-button{
            z-index: 200;
            width: 100px;
            height: 80px;
        }
    }

    .refresh {
        padding: 10px;
        position: absolute;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 10px;
        width: 20px;
        height: 20px;
        top: 10px;
        right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`;