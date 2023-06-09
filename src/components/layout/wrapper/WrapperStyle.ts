import styled from "styled-components";

export const Wrapper = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 6rem;
    height: 100vh;
    transition: padding 0.3s;

    @media(max-width: ${props => props.theme.screenSize["pc-l"]}px){
        padding: 0 0rem 0 10rem;
    }

    @media(max-width: ${props => props.theme.screenSize.tb}px){
        padding: 0 0rem;
        padding-top: 4.2rem;
    }
  `
}