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
    width: 30rem;
    height: 30rem;
    border: 0.1rem solid #fff;
    margin: 0 auto;
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