import styled from "styled-components";

export const Footer = {
  Container : styled.footer`
    width: 100%;
    background:${props => props.theme.color.bg};
  `,
  Inner: styled.div`
    /* max-width: 1200px; */
    width: 100%;
    margin: 0 auto;
    padding: 4.8rem 4rem;
  `,
  List: styled.ul`
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  `,
  Item: styled.li`
    & > a{
      font-size: 1.8rem;
      color: ${props => props.theme.color.white01};
      transition: opacity 0.3s;
      opacity: 0.5;

      &:hover{
        opacity: 1;
      }
    }
  `,
  MenuTitle: styled.span`
    font-size: 0;
  `,
  Copy: styled.p`
    color: ${props => props.theme.color.white01};
    font-size: 1.2rem;
    text-align: right;
    margin-top: 0.8rem;
    opacity: 0.5;
  `,
}

