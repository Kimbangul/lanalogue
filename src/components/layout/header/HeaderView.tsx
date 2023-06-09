'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Header from "@/components/layout/header/HeaderStyle";
import { HeaderViewPropsType } from "@/components/layout/header/type";

const HeaderView = ({menu}: HeaderViewPropsType) => {
  return(
    <Header.Container>
      <Header.Inner>
        <ul>
          {menu?.map((el, idx)=> {
            return(
              <Header.Menu.Item key={`menu${idx}`}>
                <FontAwesomeIcon icon={"music"} />
                {Object.keys(el)[0]}
              </Header.Menu.Item>
            )
          })}
        </ul>
      </Header.Inner>
    </Header.Container>
  )
}

export default HeaderView;