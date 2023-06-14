import styled from "styled-components";

const Guestbook = {
  Container: styled.div`
    max-width: ${props => props.theme.screenSize.pc}px;
    margin: 0 auto;
  `,
}

export default Guestbook;