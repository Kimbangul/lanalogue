'use client'
import {usePathname} from 'next/navigation';
import { useState, useEffect } from 'react';

import HeaderView from "@/components/layout/header/HeaderView"
import menu from '@/components/layout/header/menu';
import { MenuType } from "@/components/layout/header/type";

const HeaderContainer = () => {
  const [activeMenu, setActiveMenu] = useState<string|null>(null);
  const path = usePathname();

  // FUNCTION 현재 주소 구하기
  const getCurrentMenu = () => {
    switch(path.split('/')[1]){
      case '':
        setActiveMenu('home');
        break;
      default:
        setActiveMenu(path.split('/')[1]);
        break;
    }
  }

  useEffect(()=>{
    getCurrentMenu();
  }, [getCurrentMenu]);
  
  const menuList : MenuType[] = Object.entries(menu).map((el) => {
    return {[el[0]]: el[1]}
  });

  return <HeaderView menu={menuList} activeMenu={activeMenu}/ >
}

export default HeaderContainer;