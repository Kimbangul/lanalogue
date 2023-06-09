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
    padding: 4rem 0;
  `,
}

export default Header;