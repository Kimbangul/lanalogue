'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "@/components/layout/header/HeaderStyle";
import { HeaderViewPropsType } from "@/components/layout/header/type";

const HeaderView = ({menu}: HeaderViewPropsType) => {
  return(
    <Header.Container>
      <Header.Inner>
        <ul>
          {menu?.map((el, idx)=> {

            return(
              <li key={`menu${idx}`}>
                {/* <FontAwesomeIcon icon={solid("")}> */}
                {Object.keys(el)[0]}
              </li>
            )
          })}
        </ul>
      </Header.Inner>
    </Header.Container>
  )
}

export default HeaderView;