'use client'

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "@/components/layout/header/HeaderStyle";
import { HeaderViewPropsType } from "@/components/layout/header/type";

const HeaderView = ({menu, activeMenu}: HeaderViewPropsType) => {
  return(
    <Header.Container>
      <Header.Inner>
        <Header.Menu.List>
          {menu?.map((el, idx)=> {
            return(
              <Header.Menu.Item active={activeMenu === Object.values(el)[0].title} key={`menu${idx}`}>
               <Link href={Object.values(el)[0].link}>
                <>
                  <FontAwesomeIcon icon={Object.values(el)[0].icon} />
                  <Header.Menu.Title>{Object.keys(el)[0]}</Header.Menu.Title>
                </>
               </Link>
              </Header.Menu.Item>
            )
          })}
        </Header.Menu.List>
      </Header.Inner>
    </Header.Container>
  )
}

export default HeaderView;