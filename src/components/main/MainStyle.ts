'use client';
import styled from "styled-components";
import { InnerContent } from "@/components/common/GlobalStyle";

const Main = {
  Container: styled(InnerContent)`
    max-width: ${props => props.theme.screenSize.pc}px;
    margin: 0 auto;
    height: 100%;
  `,
  Inner: styled.div`
    width: 100%;
    height: 100%;
  `,
  ThreeContainer: styled.div`
    width: 100%;
    height: 100%;
    /* opacity: 0.5; */
  `
}

export default Main;