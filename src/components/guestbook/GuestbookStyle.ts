import styled from "styled-components";
import { PageTitle, Button, Input } from "@/components/common/GlobalStyle";

const Guestbook = {
  Container: styled.div`
    max-width: ${props => props.theme.screenSize.pc}px;
    margin: 0 auto;
  `,
  Title: styled(PageTitle)`

  `,
  List: styled.ul`
    margin-top: 4.8rem;
  `,
  Item: {
    Container: styled.li`
    margin-top: 2.4rem;
    padding-bottom: 3.2rem;
    border-bottom: 0.1rem solid ${props => props.theme.color.white06}10;

    &:first-child{
      margin-top: 0;
    }
    &:last-child{
      border-bottom: none;
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
    `,
    Item: styled(Button)`

    `,
  },
  Pagination:{
    Container: styled.div`
      display: flex;
      justify-content: end;
      margin-top: 4.8rem;

      @media(max-width:  ${props => props.theme.screenSize.tb}px){
        justify-content: center;
      }
    `,
  },
  Input: {
    Container: styled.form`
      margin-top: 4.8rem;
    `,
    InfoContainer: styled.div`
      display: flex;
      gap: 0.8rem;
    `,
    Input: styled(Input)`
      background: ${props => props.theme.color.white01}fff10;
      border: none;
      font-size: 1.6rem;
    `,
    Textarea: styled(Input)`
      resize: none;
      border: none;
      background: ${props => props.theme.color.white01}fff10;
      width: 100%;
      margin-top: 1.2rem;
      font-size: 1.6rem;
      height: 16rem;
    `
  }
}

export default Guestbook;