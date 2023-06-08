'use client'
import { Wrapper } from "@/components/layout/wrapper/WrapperStyle";

const WrapperView = ({children}: { children?: React.ReactNode}) => {
  return(
    <Wrapper.Container>
      {children}
    </Wrapper.Container>
  )
}

export default WrapperView;