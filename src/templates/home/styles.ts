import styled from 'styled-components';

export const StyHome = styled.div`
    .text-container {
        margin-right: 100px;
    }
    p {
        font-weight: 200;
        letter-spacing: 2px;
        line-height: 30px;
        text-align: justify;

        b {
            letter-spacing: 1px;
        }
    }

    h1 {
        font-weight: 400;
        margin: 10px 0;
        line-height: 80px;
        margin-bottom: 60px;

        b{
            color: ${({ theme }) => theme.primary}
        }
    }

    h2 {
        margin-bottom: 40px;
        font-weight: 300;
        font-size: 20px;
        b {
            font-size: 24px;
            font-weight: 700;
            text-transform: uppercase;
        }
    }

    .flex-row {
        display: flex;
        position: relative;
    }

    .image-container {
        position: relative;
        width: 70%;
        transition: ${({ theme }) => theme.transition};
        display: flex;
        justify-content: flex-end;
        margin-top: 30px;

        .image {
            object-fit: cover;
            object-position: center;

            height: 100%;
            max-height: 350px;
            max-width: 350px;
            border-radius: 5px;

            filter: grayscale(1);
            transition: ${({ theme }) => theme.transition};

            &:hover{
                filter: none;
            }
        }

        .dots {
            transition: ${({ theme }) => theme.transition};
            position: absolute;
            right: -10%;
            top: -10%;
            z-index: -1;
            height: 60%;
            
            path {
                transition: ${({ theme }) => theme.transition};
                fill: ${({ theme }) => theme.text};
            }
        }

        &:hover {
            transform: translateY(-3px) translateX(3px);
            
            .dots {
                transform: translateY(-5px) translateX(5px);

                path {
                    fill: ${({ theme }) => theme.primary};
                }
            }
        }
    }
`;