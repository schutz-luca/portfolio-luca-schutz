import styled from 'styled-components';

export const StyContact = styled.div`
    position: relative;
    text-align: center;
    padding: 30px 20px;
    border-radius: 10px;

    .stripes{
        position: absolute;
        top: 0;
        right: 70%;
        z-index: -1;
        height: 100%;
    }

    .stacks{
        margin-top: 60px;
    }

    p{
        font-size: 1.2rem;
        margin-top: 15px;
        
        div{
            font-size: 1rem;
            margin-bottom: 20px;
            font-weight: 200;
        }
    }

    a{
        color: ${({ theme }) => theme.colors.purple};
        &:hover{
            color: ${({ theme }) => theme.primary};
        }
    }
`;