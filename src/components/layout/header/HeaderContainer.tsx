import HeaderView from "@/components/layout/header/HeaderView"
import menu from '@/components/layout/header/menu';
import { MenuType } from "@/components/layout/header/type";

const HeaderContainer = () => {
  const menuList : MenuType[] = Object.entries(menu).map((el) => {
    return {[el[0]]: el[1]}
  });

  return <HeaderView menu={menuList}/ >
}

export default HeaderContainer;