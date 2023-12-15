import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { devices } from './devices';

export default createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  

  html {
    ${({ theme }) => `
      background: repeating-linear-gradient(90deg, ${theme.backgroundSoft} 0, ${theme.backgroundSoft} 5%, transparent 0, transparent 50%), repeating-linear-gradient(180deg, ${theme.backgroundSoft} 0, ${theme.backgroundSoft} 5%, transparent 0, transparent 50%);
      background-size: 20em 20em;
      background-color: ${theme.background};
      opacity: 1;
      `
  // background: radial-gradient(circle at top left,transparent 9%, ${theme.backgroundSoft} 10% ,${theme.backgroundSoft} 15% , transparent 16%) , radial-gradient(circle at bottom left,transparent 9%, ${theme.backgroundSoft} 10% ,${theme.backgroundSoft} 15% , transparent 16%), radial-gradient(circle at top right ,transparent 9%, ${theme.backgroundSoft} 10% ,${theme.backgroundSoft} 15% , transparent 16%) , radial-gradient(circle at bottom right,transparent 9%, ${theme.backgroundSoft} 10% ,${theme.backgroundSoft} 15% , transparent 16%),radial-gradient(circle, transparent 25%, ${theme.background}  26%),linear-gradient(45deg, transparent 46%, ${theme.backgroundSoft} 47%, ${theme.backgroundSoft} 52%, transparent 53%), linear-gradient(135deg, transparent 46%, ${theme.backgroundSoft} 47%, ${theme.backgroundSoft} 52%, transparent 53%);
  // background: radial-gradient(circle at center ,${theme.backgroundSoft}, ${theme.backgroundSoft} 10%, transparent 10%, transparent  20%, ${theme.backgroundSoft} 20%, ${theme.backgroundSoft} 30%, transparent 30%, transparent 40%, ${theme.backgroundSoft} 40%, ${theme.backgroundSoft} 50%, transparent 50%, transparent 60%, ${theme.backgroundSoft} 60%, ${theme.backgroundSoft} 70%, transparent 70%, transparent 80%, ${theme.backgroundSoft} 80%, ${theme.backgroundSoft} 90%, transparent 90%);
  }

    -webkit-animation: rainbow 100s linear infinite;
    -z-animation: rainbow 100s linear infinite;
    -o-animation: rainbow 100s linear infinite;
    animation: rainbow 100s linear infinite;
    
    @-webkit-keyframes rainbow {
      0%{background-position:0% 0%}
      100%{background-position:100% 100%}
      /* 100%{background-position:0% 0%} */
    }
    @-moz-keyframes rainbow {
      0%{background-position:0% 0%}
      100%{background-position:100% 100%}
      /* 100%{background-position:0% 0%} */
    }
    @-o-keyframes rainbow {
      0%{background-position:0% 0%}
      100%{background-position:100% 100%}
      /* 100%{background-position:0% 0%} */
    }
    @keyframes rainbow { 
      0%{background-position:0% 0%}
      100%{background-position:100% 100%}
      /* 100%{background-position:0% 0%} */
    }
}

  html {
    box-sizing: border-box;
    height: -webkit-fill-available;
    -ms-overflow-style: scrollbar;
    /* background: black; */
    ${({ theme }) => theme.id === 'colorful' ? `background: ${theme.background};` : ''}
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    font: 400 1rem ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.text};
    transition: ${({ theme }) => theme.transition};

    @media ${devices.laptopL} {
      font-size: 0.8rem;
    }
  }

  section {
    box-sizing: border-box;
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8rem;

    @media ${devices.heightBreak} {
      display: block;
      height: unset;
    }
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  img {
    max-width: 100%;
  }

  button {
    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    -webkit-box-shadow: none;
  }

  h1, h2, h3 {
    margin: 0;
  }

  h1 {
    font-size: 6.25rem;

    @media ${devices.laptopL} {
      font-size: 5rem;
    }

    @media ${devices.mobileL} {
      font-size: 4rem;
    }
  }

  h2 {
    font-size: 40px;
    padding: 10px 0;
  }

  a {
      color: ${({ theme }) => theme.text};
      text-decoration: none;
      font-weight: 600;

      &.active {
        color: ${({ theme }) => theme.primary};
      }
  }

  svg{
    transition: ${({ theme }) => theme.transition};
  }

  a, li {
    margin-bottom: 0;
    transition: ${({ theme }) => theme.transition};
    padding: 5px 0;

    &:hover, &:focus{
      transform: translateY(-3px);
    }
  }

  ul {
    list-style: none;
  }

  div.flex {
    display: flex;
    flex-wrap: wrap;

    &.centralize {
      justify-content: center;
      align-items: center;
    }
  }

  @-ms-viewport {
    width: device-width;
  }

    *::selection {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.colors.white};
    }

    *::-webkit-scrollbar {
      width: 0.4rem;
      @media ${devices.tablet}{
        width: 0.2rem;
      }
    }

    *::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.darkGray}ee;
    }

    *::-webkit-scrollbar-thumb {
      border-radius: 40px;
      background-color: ${({ theme }) => theme.colors.white}30;
      transition: background-color 0.3s ease-out;
    }
    
    .progress {
      position: sticky;
      left: 0;
      right: 0;
      height: 5px;
      min-width: 10px;
      background: ${({ theme }) => theme.progress};
      top: 0;
      z-index: 9;
      top: 0;
    bottom:0;
    position:fixed;
    overflow-y:scroll;
    overflow-x:hidden;
    }
`;