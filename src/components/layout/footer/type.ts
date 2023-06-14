import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
export interface SocialType {
  [key:string]: {
    link: string,
    icon: IconDefinition
  }
}

export interface FooterViewPropsType {
  social : SocialType[]
}