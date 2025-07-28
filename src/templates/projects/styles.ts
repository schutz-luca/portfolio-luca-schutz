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
        background: #00000090;
        padding: 20px 20px;
        border-radius: 10px;
        font-weight: 300;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
        }
    }
`;