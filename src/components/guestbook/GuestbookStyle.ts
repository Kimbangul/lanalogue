import styled from "styled-components";
import { PageTitle } from "@/components/common/GlobalStyle";

const Guestbook = {
  Container: styled.div`
    max-width: ${props => props.theme.screenSize.pc}px;
    margin: 0 auto;
  `,
  Title: styled(PageTitle)`

  `,
}

export default Guestbook;