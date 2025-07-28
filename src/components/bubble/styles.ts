import styled from 'styled-components';

export const StyBubble = styled.span`
    border: solid 1px ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    border-radius: 5px;
    font-weight: 400;
    font-size: 14px;
    padding: 3px 6px;
    margin-right: 8px;
    margin-top: 10px;
    cursor: default;
    transition: ${({ theme }) => theme.transition};
    white-space: nowrap;
    display: inline-block;

    &.purple {
        border: solid 1px ${({ theme }) => theme.colors.purple};
        color: ${({ theme }) => theme.colors.purple};
    }

    &.orange {
        border: solid 1px ${({ theme }) => theme.colors.orange};
        color: ${({ theme }) => theme.colors.orange};
    }

    &:hover {
      filter: brightness(0.8);
      transform: translateY(-5px);
    }
`;