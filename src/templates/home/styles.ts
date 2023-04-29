import styled from 'styled-components';

export const StyHome = styled.div`
    p {
        font-weight: 400;
        letter-spacing: 2px;
        line-height: 30px;
        text-align: justify;

        b {
            letter-spacing: 1px;
            text-transform: uppercase;
            font-weight: 600;
            font-size: 19px;
        }
    }

    h1 {
        font-weight: 400;
        margin: 10px 0;

        b{
            color: ${({ theme }) => theme.primary}
        }
    }

    .flex-row {
        display: flex;
        position: relative;
    }

    .image-container{
        position: relative;
        margin-left: 30px;
        width: 70%;
        transition: ${({ theme }) => theme.transition};
        display: flex;
        justify-content: flex-end;

        .image {
            object-fit: cover;
            object-position: center;

            height: 100%;
            width: 100%;
            max-height: 600px;
            max-width: 600px;
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