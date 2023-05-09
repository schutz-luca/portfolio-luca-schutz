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
  }

  .card {
    position: relative;
    padding: 25px;
    height: 600px;
    flex: 0 0 40%;
    max-width: 33%;
    cursor: pointer;

    &:hover{
      transform: translateY(-5px);
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
    padding: 40px 0;
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
    
    svg{
      font-size: 18px;
    }

    &:hover{
      transform: translateY(-5px);
    }
  }

  .open .card-content {
    height: 100%;
    max-width: 60%;
    overflow: hidden;
    pointer-events: visible;
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
      font-size: 10px;
      font-weight: 200;
      opacity: 0.7;
    }

    img {
      transition: all ease-out 0.4s;
      filter: brightness(0.6);
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      img{
      filter: brightness(0.8);
    }
    }

    &.open {
      width: 100%;
      height: 180px;
      img{
          width: 100%;
          height: 100%;
          object-fit: cover;
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

    h3 {
      font-size: 25px;
    }
  }

  .open .title-container {
    top: 30px;
    left: 30px;
    max-width: unset;

    h3 {
      font-size: 40px;
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
    
    h4 {
      margin: 15px 0;
      opacity: 0.9;
    }

    &.open{
      overflow-y: auto;
      padding: 35px;
      margin-top: 180px;
    }
  }

  p {
    opacity: 0.75;
    font-size: 20px;
    line-height: 28px;
    font-weight: 200;
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

  @media only screen and (max-width: 800px) {
    .card {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .card:nth-child(4n + 1),
    .card:nth-child(4n + 4) {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

  @media only screen and (max-width: 600px) {
    .card {
      flex: 1 0 100%;
      max-width: 100%;
      padding: 10px;
      padding-left: 0;
      padding-right: 0;
    }

    .card:nth-child(4n + 1),
    .card:nth-child(4n + 4) {
      flex: 1 0 100%;
      max-width: 100%;
    }

    .card-content-container.open {
      padding: 0;
    }
  }
`;