import { IconName } from "@fortawesome/fontawesome-svg-core"

export interface MenuType {
  [key:string]: {
    [key:string]: string,
    icon: IconName
  }
}

export interface HeaderViewPropsType {
  menu: MenuType[]
}