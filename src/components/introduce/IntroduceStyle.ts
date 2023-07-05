import styled from "styled-components";
import { InnerContent } from "@/components/common/GlobalStyle";

const Introduce = {
  Container: styled(InnerContent)`
    padding: 0 4rem;
    position: relative;
    top: -2.8rem;
    max-width: ${props => props.theme.screenSize.pc}px;
    margin: 0 auto;
  `,
  Title: styled.h1`
    color: ${props => props.theme.color.white01};
    font-size: 3.6rem;
  `,
  Text: styled.p`
    font-size: 1.8rem;
    line-height: 1.6;
    color: ${props => props.theme.color.white01};
    margin-top: 2.4rem;
  `,
  Img: {
    Container: styled.div`
      width: 100%;
      height: 28rem;
      border: 0.1rem solid ${props => props.theme.color.white01};
      overflow: hidden;
      object-fit: cover;
    `
  }
}

export default Introduce;