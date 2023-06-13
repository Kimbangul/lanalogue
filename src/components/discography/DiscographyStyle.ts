import styled from "styled-components";

const Discography = {
  Container: styled.div`
    height: 100%;
    display: flex;
    align-items: center;
  `,
  Title: styled.h1`
    color: #fff;
    font-size: 2.4rem;
    margin-bottom: 2.4rem;
  `,
  Item: styled.div`
    max-width: 30rem;
    aspect-ratio: 1 / 1;
    border: 0.1rem solid #fff;
    margin: 0 auto;
    transition: width 0.3s, height 0.3s;

    @media (max-width: ${props => props.theme.screenSize.pc}px){
      max-width: 45rem;
      width: auto;
    }

    @media (max-width: ${props => props.theme.screenSize.tb}px){
      width: 100%;
    }
  `,
  Text: {
    Container: styled.div`
      width: 30rem;
      margin: 0 auto;
      margin-top: 1.2rem;
    `,
    Title: styled.h2`
      color: #fff;
      font-size: 1.8rem;
    `,
    Release: styled.span`
      color: #fff;
      font-size: 1.4rem;
      margin-top: 0.8rem;
      font-weight: 400;
    `
  }
}

export default Discography;