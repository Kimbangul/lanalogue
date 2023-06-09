import HeaderView from "@/components/layout/header/HeaderView"
import menu from '@/components/layout/header/menu';
import { MenuType } from "./type";

const HeaderContainer = () => {
  const menuList : MenuType[] = Object.entries(menu).map((el) => {
    return {[el[0]]: el[1]}
  });
  
  console.log(menuList)

  return <HeaderView menu={menuList}/ >
}

export default HeaderContainer;