'use client'

import styled from "styled-components";
import { InnerContent, PageTitle } from "@/components/common/GlobalStyle";
import Guestbook from "@/components/guestbook/GuestbookStyle";

export const Concert = {
  Container : styled(InnerContent)`
    max-width: ${props => props.theme.screenSize.pc}px;
    margin: 0 auto;
  `,
  Title: styled(PageTitle)`
  `,
  List: styled(Guestbook.List)`
  `,
  Item: {
    Container: styled(Guestbook.Item.Container)`
      cursor: pointer;
    `,
    Inner: styled.div`
      display: flex;
      gap: 2.4rem;
    `,
    TextBox: styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      padding-top: 0.8rem;
    `,
    Img: styled.div`
      width: 24rem;
      border: 0.1rem solid #fff;
      aspect-ratio: 1 / 0.7;
      flex-shrink: 0;
    `,
    Title: styled(Guestbook.Item.Title)`
    `,
    Time: styled(Guestbook.Item.Time)`
      display: block;
      text-align: right;
    `,
    Contents: styled(Guestbook.Item.Contents)`
      flex-grow: 1;
    `
  },
}