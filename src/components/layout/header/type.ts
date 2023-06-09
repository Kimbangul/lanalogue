import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export interface MenuType {
  [key:string]: {
    link: string,
    icon: IconDefinition
  }
}

export interface HeaderViewPropsType {
  menu: MenuType[]
}