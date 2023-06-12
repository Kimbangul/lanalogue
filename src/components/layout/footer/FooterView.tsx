'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import { Footer } from "@/components/layout/footer/FooterStyle";

const FooterView = () => {
  return(
    <Footer.Container>
      <Footer.Inner>
        <ul>
          <li><FontAwesomeIcon icon={faSearch} /></li>
        </ul>
        <Footer.Copy>© {moment().format('YYYY')} Kimbangul. All Rights Reserved.</Footer.Copy>
      </Footer.Inner>
    </Footer.Container>
  )
}

export default FooterView;