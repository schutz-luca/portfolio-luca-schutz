import styled from "styled-components";

export const StyHeader = styled.header`
    position: fixed;
    top: 0;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;
    z-index: 2;

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        
        li {
            list-style: none;

            a {
                height: 100%;
                width: 100%;
                padding: 5px 20px;
            }
        }
    }
`

export const StySideElement = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    bottom: 0;
    width: 60px;
    max-height: 70vh;

    a:hover {
        color: ${({ theme }) => theme.primary}
    }

    &.left{
        left: 50px;
        right: auto;

        svg{
            height: 30px;
            width: 30px;
        }

        li {
            margin: 15px 0;
            transition: ${({ theme }) => theme.transition};
        }
    }

    &.right{
        right: 50px;
        left: auto;

        a {
            padding: 10px;
            font-size: 13px;
            letter-spacing: 0.1em;
            -webkit-writing-mode: vertical-rl;
            writing-mode: vertical-rl;
        }
    }

    &::after{
        content: "";
        display: block;
        width: 1px;
        height: 120px;
        margin: 0px auto;
        background: ${({ theme }) => theme.text};
    }
    &::before{
        content: "";
        display: block;
        width: 1px;
        height: 100vh;
        margin: 0px auto;
        background: ${({ theme }) => theme.text};
    }
`

export const StyMain = styled.main`
    padding: 80px 200px;
    margin: 0px auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
`