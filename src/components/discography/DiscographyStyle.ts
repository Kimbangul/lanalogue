import styled from "styled-components";
import { PageTitle } from "@/components/common/GlobalStyle";

const Discography = {
  Container: styled.div`
    height: 100%;
    display: flex;
    align-items: center;

    @media(max-width: ${props => props.theme.screenSize.mb}px){
      .swiper-wrapper{
        display: block;
      }

      .swiper-slide{
        margin-top: 3.2rem;

        &:first-child{
          margin-top: 0;
        }
      }
    }
  `,
  Title: styled(PageTitle)`
    margin-bottom: 2.4rem;
  `,
  Item: styled.div`
    max-width: 30rem;
    aspect-ratio: 1 / 1;
    border: 0.1rem solid ${props => props.theme.color.white01};
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
      color: ${props => props.theme.color.white01};
      font-size: 1.8rem;
    `,
    Release: styled.span`
      color: ${props => props.theme.color.white01};
      font-size: 1.4rem;
      margin-top: 0.8rem;
      font-weight: 400;
    `
  }
}

export default Discography;