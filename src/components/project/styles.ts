import { devices } from '@/src/styles/devices';
import { themeDark } from '@/src/styles/theme';
import styled from 'styled-components';

export const StyProject = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    border-bottom: 5px solid ${({ theme }) => theme.colors.darkGray};
    padding: 30px;
   background: ${themeDark.backgroundSoft};
    border-radius: 10px 10px 0 0;

    @media ${devices.laptopL} {
        flex-direction: column-reverse;
    }

    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        p,h3{
            color: ${({ theme }) => theme.colors.white};
        }

        h3 {
            font-size: 2rem;
            margin-bottom: 10px;
        }

        p {
            font-weight: 300;
            margin: 8px 0;
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
        border-radius: 10px;
        height: 250px;
        width: 500px;
        /* min-width: 400px; */
        object-fit: cover;
        object-position: top;
        filter: saturate(0) brightness(0.8);
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
        width: fit-content;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: ${({ theme }) => theme.colors.darkGray};
            padding: 10px 20px;
            border-radius: 10px;
            color: ${({ theme }) => theme.colors.white};

            svg{
                font-size: 22px;
            }
        }
    }
`;