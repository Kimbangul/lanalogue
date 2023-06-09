'use client'

import Header from "@/components/layout/header/HeaderStyle";

const HeaderView = ({menu}:{menu?:{[key:string]:string}[]}) => {
  return(
    <Header.Container>
      <Header.Inner>
        <ul>
          {menu?.map((el, idx)=> {
            return(
              <li key={`menu${idx}`}>{Object.keys(el)[0]}</li>
            )
          })}
        </ul>
      </Header.Inner>
    </Header.Container>
  )
}

export default HeaderView;