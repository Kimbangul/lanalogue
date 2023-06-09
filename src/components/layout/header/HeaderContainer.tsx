import HeaderView from "@/components/layout/header/HeaderView"
import menu from '@/components/layout/header/menu.json';

const HeaderContainer = () => {
  const menuList = Object.entries(menu).map((el) => {
    return {[el[0]]: el[1]}
  });
  
  console.log(menuList)

  return <HeaderView menu={menuList}/ >
}

export default HeaderContainer;