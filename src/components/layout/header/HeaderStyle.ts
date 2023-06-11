import styled from "styled-components";

const Header = {
  Container: styled.header`
    width: 6rem;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
  `,
  Inner: styled.div`
    width: 100%;
    height: 100%;
    padding: 12rem 0;
    display: flex;
  `,
  Menu: {
    List: styled.ul`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,
    Item: styled.li`
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
        color: #fff;
        transition: color 0.3s;

        &:hover{
          color: ${props => props.theme.color.point01};
        }
      }
    `,
    Title: styled.span`
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    `
  }
}

export default Header;