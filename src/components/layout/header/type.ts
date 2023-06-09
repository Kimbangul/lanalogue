export interface MenuType {
  [key:string]: {
    [key:string]: string
  }
}

export interface HeaderViewPropsType {
  menu: MenuType[]
}