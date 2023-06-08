import styled from "styled-components";

export const Footer = {
  Container : styled.footer`
    width: 100%;
    background:${props => props.theme.color.bg};
  `,
  Inner: styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 4.8rem 0;
  `
}

