import styled from "styled-components";
import { PageTitle } from "@/components/common/GlobalStyle";

const Guestbook = {
  Container: styled.div`
    max-width: ${props => props.theme.screenSize.pc}px;
    margin: 0 auto;
  `,
  Title: styled(PageTitle)`

  `,
  Item: {
    Container: styled.li`
    margin-top: 2.4rem;

    &:first-child{
      margin-top: 0;
    }
   `,
    Title: styled.h2`
      font-size: 2.4rem;
      color: ${props => props.theme.color.white01};
    `,
    InfoContainer: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    TextContainer: styled.div`
      color: ${props => props.theme.color.white01};
    `,
    Nickname: styled.span`
      font-size: 1.8rem;
      font-weight: 500;
      margin-right: 1.2rem;
    `,
    Time: styled.span`
      font-size: 1.2rem;
      color: ${props => props.theme.color.white06};
    `,
    Contents: styled.p`
      font-size: 1.6rem;
      color: ${props => props.theme.color.white03};
      margin-top: 1.2rem;
      line-height: 1.6;
    `
  },
  Control: {
    Container: styled.div`
      display: flex;
      gap: 0.8rem;
    `
  }
}

export default Guestbook;