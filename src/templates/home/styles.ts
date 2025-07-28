import { devices } from '@/src/styles/devices';
import styled from 'styled-components';

export const StyHome = styled.div`
    .text-container {
        margin-right: 130px;

        @media ${devices.laptopL} {
            margin: 0;
        }
    }
    p {
        font-weight: 200;
        line-height: 30px;

        b {
            font-weight: 700;
        }
    }

    .presenting{
        @media ${devices.heightBreak} {
            margin-top: 30px;
        }
    }

    h1 {
        font-weight: 400;
        line-height: 80px;
        margin-top: 0px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;

        @media ${devices.mobileL} {
            line-height: 50px;
        }

        b{
            color: ${({ theme }) => theme.primary};
        }
    }

    h2 {
        margin-bottom: 30px;
        font-weight: 100;
        font-size: 18px;
        font-family: ${({ theme }) => theme.fonts.secondary};
        b {
            font-size: 20px;
            font-weight: 700;
            text-transform: uppercase;
        }
    }

    h3{
        font-weight: 300;
        font-size: 16px;
        margin-bottom: 30px;
        color: ${({ theme }) => theme.colors.white};
        text-transform: uppercase;

        b {
            font-weight: 500;
        }
    }

    .flex-row {
        display: flex;
        position: relative;

        @media ${devices.laptopL} {
            flex-direction: column;
        }
    }

    .image-container {
        position: relative;
        width: 100%;
        transition: ${({ theme }) => theme.transition};
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media ${devices.laptopL} {
            margin-top: 50px;
        }

        .image {
            object-fit: cover;
            object-position: center;

            height: 100%;
            max-height: 350px;
            max-width: 350px;
            border-radius: 50%;

            transition: ${({ theme }) => theme.transition};
        }

        .dots {
            transition: ${({ theme }) => theme.transition};
            position: absolute;
            left: -5rem;
            top: -1rem;
            z-index: -1;
            height: 60%;
            
            path {
                transition: ${({ theme }) => theme.transition};
                fill: ${({ theme }) => theme.text};
            }

            @media ${devices.laptopL} {
                left: -20rem;
                right: 0;
                top: -1.5rem;
                margin: auto;
            }
        }

        &:hover {
            transform: translateY(-3px) translateX(3px);
            
            .dots {
                transform: translateY(-5px) translateX(5px);

                path {
                    fill: ${({ theme }) => theme.primary};
                }
            }
        }
    }
`;