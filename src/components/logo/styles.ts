import { devices } from '@/src/styles/devices';
import styled from 'styled-components';

export const StyLogo = styled.div`
    height: 50px;
    width: 50px;
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 14px;
    font-weight: 200;
    position: relative;

    &.loading-page {
        font-size: 200px;
        margin: 20px;

        @media ${devices.tabletS}{
            font-size: 140px;
        }
        @media ${devices.mobileL}{
            font-size: 100px;
        }

        .react-icon{
            padding: 80px;
        }

        p.welcome{
            &.hide {
                opacity: 1;
            }
        }
    }

    p.welcome{
        font-size: 30px;
        position: absolute;
        bottom: 28%;
        padding: 5px 15px;
        font-weight: 200;
        font-style: italic;
        transition: opacity ease-out 1.4s;
        opacity: 0;

        font-size: 20px;
        @media ${devices.mobileL}{
            font-size: 16px;
            bottom: 35%;
        }
    }

    .react-icon {
        position: absolute;
        height: 98%;
        width: 98%;
        padding: 5px;
        border-radius: 50%;
        transition: opacity ease-out 1.4s;

        animation: rotating 8s linear infinite;
        opacity: 1;

        &.hide {
            opacity: 0;
        }
    }

    text {
        transition: opacity ease-out 1.4s;
        opacity: 0;
        &.hide {
            opacity: 1;
        }
    }


    /* Safari and Chrome */
    @-webkit-keyframes rotating {
        from {
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes rotating {
        from {
            -ms-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -ms-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes hide {
        0% {
            opacity: 1;
        }
        22%{
            opacity: 1;
        }
        25% {
            opacity: 0;
        }
        85%{
            opacity: 0;
        }
        88%{
            opacity: 1;
        }
        100% {
            opacity: 1;
        }
    }
`;