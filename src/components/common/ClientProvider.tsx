'use client';

import GlobalStyle from "@/components/common/GlobalStyle";
import { PropsWithChildren} from "react";
import { ThemeProvider } from "styled-components";

import theme from "@/utils/Theme";

export default function ClientProvider({ children }: PropsWithChildren) {
  return (
      <>
        <ThemeProvider theme={theme}>
        <GlobalStyle/>
          {children}
        </ThemeProvider>
      </>
  );
}
