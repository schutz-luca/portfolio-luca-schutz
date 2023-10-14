import { devices } from '@/src/styles/devices';
import styled from 'styled-components';

export const StyCardContainer = styled.div`
  color: white;

  h1 {
    font-weight: bold;
    color: white;
    margin: 6px 0 12px;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .card-list {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;

    @media ${devices.laptop}{
      flex-direction: column;

      .card{
        width: 100%;
        max-width: unset;
        height: 280px;
        flex: unset;
      }
    }
  }

  .card {
    position: relative;
    padding: 15px;
    height: 700px;
    flex: 0 0 40%;
    max-width: 33%;
    cursor: pointer;

    &:hover{
      transform: translateY(-5px);
    }

    @media (max-height: 970px){
      height: 500px;
    }
  }

  .card-content-container {
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
  }

  .card-content-container.open {
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 11;
    overflow: auto;
    padding: 80px 0;
    pointer-events: none;

  }

  .card-content {
    position: relative;
    border-radius: 20px;
    background: #1c1c1e;
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .read-more{
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: ${({ theme }) => theme.transition};
    font-weight: 200;
    text-transform: uppercase;
    font-size: 16px;

    text-shadow: 5px 5px 10px rgba(0,0,0,0.9);
    
    svg {
      font-size: 18px;
      text-shadow: 5px 5px 10px rgba(0,0,0,0.9);
    }

    &:hover {
      transform: translateY(-5px);
    }
  }

  .open .card-content {
    height: 100%;
    max-width: 60%;
    overflow: hidden;
    pointer-events: visible;

    @media ${devices.laptop} {
      max-width: 80%;
    }
  }

  .card-open-link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .card-image-container {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;

    .image-credit{
      position: absolute;
      z-index: 1;
      right: 8px;
      bottom: 4px;
      font-size: 12px;
      font-weight: 200;
      opacity: 0.7;
      text-shadow: 5px 5px 5px rgba(0,0,0,0.9);
    }

    img {
      transition: all ease-out 0.4s;
      filter: brightness(0.55);
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      img {
        filter: brightness(0.8);
      }
    }

    &.open {
      width: 100%;
      height: 200px;
      img {
          width: 100%;
          height: 100%;
          object-fit: cover;
      }

      @media ${devices.tablet} {
        height: 250px;
      }

      @media ${devices.mobileM} {
        height: 230px;
      }
    }
  }

  .open .card-image-container,
  .open .title-container {
    z-index: 1;
  }

  .title-container {
    position: absolute;
    top: 15px;
    left: 15px;
    max-width: 300px;
    text-shadow: 5px 5px 20px rgba(0,0,0,0.5);
    pointer-events: none;

    h3 {
      font-size: 25px;
    }

    @media ${devices.laptop}{
      max-width: unset;
      width: 100%;
    }
  }

  .open .title-container {
    top: 30px;
    padding-right: 30px;
    margin-bottom: 20px;
    max-width: unset;
    width: 100%;

    h3 {
      font-size: 40px;

      @media ${devices.tablet} {
        font-size: 30px;
      }
    }

    @media ${devices.mobileL} {
      padding-right: 15px;
    }
  }

  h2 {
    color: #fff;
    margin: 8px 0;
    font-size: 25px;
  }

  .category {
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    width: 100%;
    margin-bottom: 15px;

    &:not(.open)::after {
      content: '';
      width: 100%;
      height: 1px;
      background: ${({ theme }) => theme.colors.white}90;
      position: absolute;
      margin-left: 10px;
      margin-top: 5px;
      z-index: 0;
      border-radius: 3px;
    }

    @media ${devices.laptop}{
      background: transparent;
    }
  }

  .overlay {
    z-index: 10;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    will-change: opacity;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }

  .content-container {                                                                                         
    width: 100%;
    
    p {
      font-size: 18px;
      font-family: ${({ theme }) => theme.fonts.secondary};
    }

    a {
      color: ${({ theme }) => theme.primary};
      text-decoration: underline;

      &:hover {
        filter: brightness(0.7);
      }
    }
    
    h4 {
      margin-top: 5px;
      opacity: 0.9;
    }

    &.open{
      overflow-y: auto;
      padding: 20px 35px;
      margin-top: 200px;

      @media ${devices.tablet}{
        margin-top: 250px;
        padding: 10px 25px;
      }

      @media ${devices.mobileM}{
        margin-top: 230px;
      }

      @media (max-width: 800px){
        .description{
          font-size: 12px;
          line-height: 18px;    
        }
      }

      .skills {
        margin-top: 12px;

        @media (max-height: 665px){
          margin: none;
        }
      }

      .description {
        @media (max-height: 725px){
          font-size: 14px;
            line-height: 18px;
        }
        
        @media (max-height: 665px) {
          display: none;
        }
        
        @media (max-width: 770px){
          display: none;
        }
      }

      overflow-y: auto;
      overflow-x: hidden;
    }
  }

  p {
    opacity: 0.9;
    font-size: 20px;
    line-height: 28px;
    font-weight: 200;

    @media ${devices.tablet}{
        font-size: 16px;
      }
  }

  div.divisor {
    &::after {
      content: '';
      background-color: #ffffff50;
      height: 1px;
      width: 100%;
      display: block;
      margin-top: 15px;
      margin-bottom: 10px;
    }
  }
`;