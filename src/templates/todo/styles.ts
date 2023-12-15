import styled from "styled-components";

export const StyTodo = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2.greetings{
        font-weight: 300;
        padding: 0;
        margin: 20px 0;
        line-height: 38px;

        b {
            font-weight: 600;
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

    form{
        width: 50%;
    }
    input{
        width: 100%;
        border: none;
        &:focus{
            border: none;
        }
        border-radius: 10px;
        padding: 10px 30px;
    }
    button{
        color: ${({ theme }) => theme.text};
    }

    
    svg{
        font-size: 20px;
        cursor: pointer;

        color: ${({ theme }) => theme.colors.white};
    }

    div.cheked svg{
        color: ${({ theme }) => theme.colors.green};
    }

    text{
        max-width: 90%;
    }
`

export const TaskList = styled.ul`
    margin: 40px 0;
    width: 50%;

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
`