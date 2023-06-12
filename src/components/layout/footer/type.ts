import { MenuType } from "@/components/layout/header/type";

export interface SocialType extends MenuType {

}

export interface FooterViewPropsType {
  social : SocialType[]
}