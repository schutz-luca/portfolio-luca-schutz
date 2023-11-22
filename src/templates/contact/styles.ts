import styled from "styled-components";

export const StyContact = styled.div`
    position: relative;
    text-align: center;

    ${({ theme }) => theme.effects.glass};
    background-color: #00000010;

    padding: 30px 20px;
    border-radius: 10px;

    svg{
        height: 60px;
        width: 60px;
        color: ${({ theme }) => theme.colors.white}90;
    }

    h2 {
        color: ${({ theme }) => theme.secondary}
    }

    p{
        font-size: 1.2rem;
        margin-top: 15px;
    }

    a{
        color: ${({ theme }) => theme.colors.orange};
        &:hover{
            color: ${({ theme }) => theme.primary};
        }
    }
`