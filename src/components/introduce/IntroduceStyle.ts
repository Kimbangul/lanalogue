import styled from "styled-components";

const Introduce = {
  Container: styled.div`
    padding: 0 4rem;
    position: relative;
    top: -2.8rem;
  `,
  Title: styled.h1`
    color: #fff;
    font-size: 3.6rem;
  `,
  Text: styled.p`
    font-size: 1.8rem;
    line-height: 1.6;
    color: #fff;
    margin-top: 2.4rem;
  `,
  Img: {
    Container: styled.div`
      width: 100%;
      height: 28rem;
      border: 0.1rem solid #fff;
      overflow: hidden;
      object-fit: cover;
    `
  }
}

export default Introduce;