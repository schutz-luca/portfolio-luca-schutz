import { devices } from '@/src/styles/devices';
import styled from 'styled-components';

export const StyTodo = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    a {
        font-size: 30px;
        &:hover{
            &, svg{
                color: ${({ theme }) => theme.colors.purple};
            }
        }

        svg{
            font-size: 25px;
        }
    }

    .persist-message{
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.gradient.primary};
        padding: 5px 8px;
        border-radius: 10px;
    }

    h2.greetings{
        font-weight: 300;
        padding: 0;
        margin: 20px 0;
        line-height: 38px;

        b {
            font-weight: 600;
            &.effect{
                color: ${({ theme }) => theme.colors.white};
                background: ${({ theme }) => theme.gradient.primary};
                padding: 3px 5px;
                border-radius: 10px;
            }
        }

        small{
            font-size: 28px;
        }
    }

    p {
        font-size: 20px;
        font-weight: 300;
        line-height: 20px;
        b{
            font-weight: 400;
        }
    }

    input{
        width: 100%;
        border: none;
        &:focus{
            border: none;
        }
        border-radius: 10px;
        padding: 10px 30px;
        margin-bottom: 100px;
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);

        &[disabled]{
            color: #ffffff90;
        }
    }
    button{
        color: ${({ theme }) => theme.text};
    }

    
    svg{
        font-size: 20px;
        cursor: pointer;

        color: ${({ theme }) => theme.text};
    }

    text{
        max-width: 90%;
    }

    form{
        width: 100%;
    }

    .container{
        width: 60%;

        @media ${devices.desktop}{
            width: 70%;
        }

        @media ${devices.mobileL}{
            width: 100%;
        }
    }
`;

export const TaskList = styled.ul`
    margin: 40px 0;

    border: 3px solid ${({ theme }) => `${theme.text}40`};
    border-radius: 10px;
    ${({ theme }) => theme.effects.glass};
    background-color: ${({ theme }) => theme.colors.purple}20;

    li{
        display: flex;
        align-items: center;
        text-align: center;
        padding: 10px 10px;
        border-bottom: 3px solid ${({ theme }) => `${theme.text}40`};
        cursor: default;

        display: flex;
        justify-content: space-between;

        &:hover{
            background-color: ${({ theme }) => theme.colors.blue}20;
        }

        &.empty{
            font-style: italic;
            justify-content: center;
        }
    }
`;