import styled, { css } from "styled-components";

const Header = {
  Container: styled.header`
    width: 6rem;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
    display: flex;
  `,
  Inner: styled.div`
    width: 100%;
    height: 40rem;
    display: flex;
    margin: auto 0;
  `,
  Menu: {
    List: styled.ul`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,
    Item: styled.li<{active: boolean}>`
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      font-size: 2.4rem;

      & > a{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.color.white01};
        transition: color 0.3s, opacity 0.3s;
        opacity: 0.5;

        ${({active}) => active &&
          css`
            opacity: 1;
          `
        }

        &:hover{
          /* color: ${props => props.theme.color.point01}; */
          opacity: 1;

          & > span{
            visibility: visible;
            left: 130%;
            opacity: 1;
            color: ${props => props.theme.color.white01};
          }
        }
      }
    `,
    Title: styled.span`
      visibility: hidden;
      position: absolute;
      opacity: 0;
      top: 50%;
      left: 125%;
      transform: translateY(-50%);
      transition: left 0.3s, opacity 0.3s;
      font-size: 1.2rem;
      color: ${props => props.theme.color.white01};
      white-space: nowrap;
    `
  }
}

export default Header;