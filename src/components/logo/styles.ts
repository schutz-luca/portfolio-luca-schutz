import styled from 'styled-components';

export const StyLogo = styled.div`
    height: 55px;
    width: 55px;
    svg path{
        fill: ${({ theme }) => theme.text};
    }
`;