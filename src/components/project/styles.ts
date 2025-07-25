import styled from 'styled-components';

export const StyProject = styled.div`
    display: flex;
    gap: 30px;

    .content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;

        h3 {
            font-size: 2rem;
            margin-bottom: 10px;
        }

        h4{
            margin-bottom: 20px;
            font-weight: 500;
        }
        p {
            font-weight: 300;
        }
    }

    .techs{
        margin: 10px 0;

        span{
            display: inline-block;
        }
        
    }

    img {
        background: #00000090;
        border-radius: 10px;
        height: 350px;
        width: 600px;
        min-width: 600px;
    }

    .links{
        display: flex;
        gap: 10px;
        margin-bottom: 10px;

        a {
            background: ${({ theme }) => theme.colors.darkGray};
            padding: 10px 20px;
            border-radius: 5px;
        }
    }
`;