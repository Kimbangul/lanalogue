'use client'

import styled, { createGlobalStyle } from 'styled-components';
import theme from '@/utils/Theme';

const GlobalStyle = createGlobalStyle`
 html{
  font-size: 62.5%; 
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
    font-family: sans-serif;
    font-size: 1.4rem;
    min-width: 280px;
    background: ${theme.color.bg};
    min-height: 100vh;
    position: relative;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: sans-serif;
  }

::-webkit-scrollbar{
  display: none;
}

`;

export const Contents = styled.section`
  flex-grow: 1;
`

export default GlobalStyle;
