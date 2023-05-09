import styled from 'styled-components';

export const StyBubble = styled.span`
    border: solid 1px ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    border-radius: 5px;
    font-weight: 400;
    padding: 3px 6px;
    margin-right: 8px;
    cursor: default;
    transition: ${({ theme }) => theme.transition};
    white-space: nowrap;

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