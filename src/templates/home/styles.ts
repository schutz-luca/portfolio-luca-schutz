import { devices } from '@/src/styles/devices';
import styled from 'styled-components';

export const StyHome = styled.div`
    .text-container {
        margin-right: 100px;

        @media ${devices.laptopL} {
            margin: 0;
        }
    }
    p {
        font-weight: 200;
        letter-spacing: 2px;
        line-height: 30px;
        text-align: justify;

        b {
            letter-spacing: 1px;
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
        margin-top: 10px;
        margin-bottom: 60px;

        @media ${devices.mobileL} {
            line-height: 50px;
        }

        b{
            color: ${({ theme }) => theme.primary}
        }
    }

    h2 {
        margin-bottom: 40px;
        font-weight: 300;
        font-size: 20px;
        b {
            font-size: 24px;
            font-weight: 700;
            text-transform: uppercase;
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
            border-radius: 5px;

            filter: grayscale(1);
            transition: ${({ theme }) => theme.transition};

            &:hover{
                filter: none;
            }
        }

        .dots {
            transition: ${({ theme }) => theme.transition};
            position: absolute;
            left: -5rem;
            top: -2rem;
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