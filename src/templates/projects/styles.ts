import { themeDark } from '@/src/styles/theme';
import styled from 'styled-components';

export const StyProjects = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
    margin-top: 15px;

    .more{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        background: ${themeDark.backgroundSoft};
        padding: 20px 20px;
        border-radius: 10px;
        font-weight: 300;

        
            color: ${({ theme }) => theme.colors.white};
        

        
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            font-weight: 400;

        
    }
`;