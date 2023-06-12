'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import { Footer } from "@/components/layout/footer/FooterStyle";
import { FooterViewPropsType } from "@/components/layout/footer/type";
import Link from "next/link";

const FooterView = ({social}: FooterViewPropsType) => {
  return(
    <Footer.Container>
      <Footer.Inner>
        <ul>
          {
            social?.map((el, idx) => {
              return(
                <li key={`social${idx}`}>
                  <Link href={Object.values(el)[0].link}>
                    <>
                      <FontAwesomeIcon icon = {Object.values(el)[0].icon}/>
                      <span>{Object.keys(el)[0]}</span>
                    </>
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <Footer.Copy>© {moment().format('YYYY')} Kimbangul. All Rights Reserved.</Footer.Copy>
      </Footer.Inner>
    </Footer.Container>
  )
}

export default FooterView;