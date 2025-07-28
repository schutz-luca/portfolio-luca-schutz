import { devices } from '@/src/styles/devices';
import styled from 'styled-components';

export const StyProject = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    border-bottom: 5px solid ${({ theme }) => theme.colors.darkGray};
    padding: 30px;
    background: #00000060;
    border-radius: 10px 10px 0 0;

    @media ${devices.laptopL} {
        flex-direction: column-reverse;
    }

    .content{
        display: flex;
        flex-direction: column;
        gap: 10px;

        h3 {
            font-size: 2rem;
            margin-bottom: 10px;
        }

        h4{
            margin-bottom: 20px;
            font-weight: 300;
        }
        p {
            font-weight: 300;
        }
    }

    .techs{
        margin: 10px 0;
        width: 100%;

        span{
            display: inline-block;
        }
        
    }

    .cover {
        background: #00000090;
        border-radius: 10px;
        height: 250px;
        width: 500px;
        /* min-width: 400px; */
        object-fit: cover;
        object-position: top;
        filter: saturate(0) brightness(0.8) blur(2px);
        transition: all ease-out 0.3s;

        &:hover {
            
        }
    }

    &:hover{
        .cover {
            filter: saturate(1) brightness(1);
        }
    }

    .logo {
        max-height: 50px;
        max-width: fit-content;
        margin-bottom: 20px;
    }

    .content-text {
        display: flex;
        flex-direction: column;
        align-items: center;

        p{
            text-align: justify;
        }
    }

    .links{
        display: flex;
        justify-content: flex-start;
        gap: 10px;
        margin-bottom: 10px;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: ${({ theme }) => theme.colors.darkGray};
            padding: 10px 20px;
            border-radius: 10px;

            svg{
                font-size: 22px;
            }
        }
    }
`;