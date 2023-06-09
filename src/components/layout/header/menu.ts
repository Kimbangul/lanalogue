import { MenuType } from "@/components/layout/header/type";
import { faIcons,faMusic, faCompactDisc, faBook, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const menu : MenuType = {
  "introduce": {
    "link": "#",
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