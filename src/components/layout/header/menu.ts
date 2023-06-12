import { MenuType } from "@/components/layout/header/type";
import { faHouse, faIcons,faMusic, faCompactDisc, faBook, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const menu : MenuType = {
  "home": {
    "link": "/",
    "icon": faHouse
  },
  "introduce": {
    "link": "introduce",
    "icon": faIcons
  },
  "member": {
    "link": "#",
    "icon": faPeopleGroup
  },
  "discography":{
    "link": "#",
    "icon": faCompactDisc
  },
  "concert info": {
    "link": "#",
    "icon": faMusic
  },
  "guestbook": {
    "link": "#",
    "icon": faBook
  }
}

export default menu;