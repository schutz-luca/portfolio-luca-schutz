import styled from 'styled-components';
import { devices } from '@/src/styles/devices';

export const StyHeader = styled.header`
    position: fixed;
    height: 70px;
    width: 100%;
    top: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px 60px;
    z-index: 2;
    background: ${({ theme }) => theme.background};

    @media ${devices.tablet} {
        padding: 5px 20px;
    }

    .sidemenu {
        display: none;;
    }
    @media ${devices.tablet} {
        .topmenu {
            display: none;
        }
        .sidemenu {
            display: block;
        }
    }
    

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        
        li {
            padding: 5px 20px;

            a {
                height: 100%;
                width: 100%;
                position: relative;

                &::after {
                    content: "";
                    width: 10px;
                    height: 10px;
                    opacity: 0;
                    right: -18px;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                    transform: rotate(0deg);
                    transition: 0.5s;
                    position: absolute;
                    pointer-events: none;
                    background-color: ${({ theme }) => theme.primary};
                }

                &.active{
                    &::after{
                        transform: rotate(45deg);
                        opacity: 1;
                    }
                }
            }
        }
    }
`;

export const StySideElement = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    bottom: 0;
    width: 60px;
    max-height: 60vh;

    .scrolling-obj {
        fill: ${({ theme }) => theme.text};
        position: absolute;
        top: -80px;
        height: 60px;
        width: 60px;
        transition: transform 2s ease-in-out;
    }

    a:hover {
        color: ${({ theme }) => theme.primary};
    }

    &.left{
        left: 50px;
        right: auto;

        svg{
            height: 30px;
            width: 30px;
        }

        li {
            margin: 15px 0;
            transition: ${({ theme }) => theme.transition};
        }
    }

    &.right{
        right: 50px;
        left: auto;

        a {
            padding: 10px;
            font-size: 13px;
            letter-spacing: 0.1em;
            -webkit-writing-mode: vertical-rl;
            writing-mode: vertical-rl;
            font-weight: 300;
            letter-spacing: 4px;
        }
    }

    @media ${devices.tablet} {
        &.left {
            left: 30px;
        }

        &.right {
            right: 30px;
        }
    }

    @media ${devices.tabletS} {
        display: none;
    }


    &::after{
        content: "";
        display: block;
        width: 1px;
        min-height: 80px;
        margin: 0px auto;
        background: ${({ theme }) => theme.text};
    }
    &::before{
        content: "";
        display: block;
        width: 1px;
        height: 100vh;
        margin: 0px auto;
        background: ${({ theme }) => theme.text};
    }
`;

export const StyMain = styled.main`
    padding: 0 200px;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    position: absolute;
    top: 70px;
    left: 0; 
    right: 0;
    margin: 0px auto;

    @media ${devices.laptopL} {
        padding: 0 130px;
    }

    @media ${devices.tabletS} {
        padding: 0 50px;
    }

    @media ${devices.mobileL} {
        padding: 0 30px;
    }
`;