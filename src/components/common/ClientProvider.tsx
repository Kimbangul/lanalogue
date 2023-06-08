'use client';

import GlobalStyle from "@/components/common/GlobalStyle";
import { PropsWithChildren} from "react";

export default function ClientProvider({ children }: PropsWithChildren) {
  return (
      <>
        <GlobalStyle />
        {children}
      </>
  );
}
