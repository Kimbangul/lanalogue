'use client'

import styled, { createGlobalStyle } from 'styled-components';
import theme from '@/utils/Theme';

const GlobalStyle = createGlobalStyle`
 html{
  font-size: 62.5%; 
  transition: font-size 0.3s;

  @media(max-width: ${theme.screenSize.tb}px){
        font-size: 58%;
  }

    @media(max-width: ${theme.screenSize.mb}px){
        font-size: 50%;
  }
 }
 *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    color: inherit;     
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
  a, img{
    display: block;
  }
  button{
    outline: none;
    appearance: none;
    border: none;
  }
  body{
    font-family: 'Montserrat', 'Noto Sans KR', sans-serif;
    font-size: 1.4rem;
    min-width: 280px;
    background: ${theme.color.bg};
    min-height: 100vh;
    position: relative;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', 'Noto Sans KR', sans-serif;
  }
  button, input {
    font-family: 'Montserrat', 'Noto Sans KR', sans-serif;
  }

::-webkit-scrollbar{
  display: none;
}

`;

export const Contents = styled.section`
  flex-grow: 1;
`;

export const Button = styled.button`
  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;
  background: #ffffff20;
  color: ${props => props.theme.color.white01};
  cursor: pointer;
`;

export const Input = styled.input`
  border: 0.1rem solid ${props => props.theme.color.white06}60;
  background: transparent;
  padding: 1.2rem;
  border-radius: 0.6rem;
  color: ${props => props.theme.color.white01};
`;

export const PageTitle = styled.h1`
    color: ${props => props.theme.color.white01};
    font-size: 2.4rem;
`

export const InnerContent = styled.div`
  padding: 0 4rem;
  transition: padding 0.3s;

  @media(max-width: ${props => props.theme.screenSize["pc-l"]}px){
        padding: 0 3rem;
  }
`

export default GlobalStyle;
