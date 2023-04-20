/**
 * IMPORTS
 */
import styled from 'styled-components';

export const StyThemeButton = styled.button`
    border-radius: 50%;
    width: 100%;
    height: 35px;

    padding: 5px;
    background: ${({ theme }) => theme.text}30;
    color: ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
    justify-content: center;

    &.light {
        background: ${({ theme }) => theme.gradient.rainbow};
        color: ${({ theme }) => theme.colors.white};
        opacity: 0.7;
    }  

    svg{
        height: 100%;
        width: 100%;
    }
`;