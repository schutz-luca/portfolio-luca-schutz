import styled from 'styled-components';

export const StyLogo = styled.div`
    height: 60px;
    width: 60px;
    svg path{
        fill: ${({ theme }) => theme.text};
    }
`;